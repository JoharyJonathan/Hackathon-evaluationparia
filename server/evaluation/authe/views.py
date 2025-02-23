from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

User = get_user_model()

# Inscription
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, password=password)
    token, created = Token.objects.get_or_create(user=user)
    
    return Response({'token': token.key}, status=status.HTTP_201_CREATED)

# Connexion
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = User.objects.filter(username=username).first()
    
    if user is None or not user.check_password(password):
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    
    return Response({'token': token.key})

# Deconnexion
@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)