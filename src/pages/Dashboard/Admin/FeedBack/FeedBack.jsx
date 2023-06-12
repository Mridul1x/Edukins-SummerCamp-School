import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const FeedBack = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Send feedback to the backend
      await axiosSecure
        .patch(`/classes/${id}/feedback`, { feedback })
        .then((res) => {
          console.log(res.data);
        });

      // Clear the input field and show success message
      setFeedback("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      setError("Error submitting feedback. Please try again.");
      console.error("Error submitting feedback:", error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Feedback for class with ID: {id}</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default FeedBack;
