export default function QuestionCard({ question, options }) {
    return (
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="font-semibold mb-2">{question}</h3>
        <ul>
          {options.map((option, index) => (
            <li key={index} className="mb-1">
              <label className="flex items-center">
                <input type="radio" name="question" className="mr-2" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  