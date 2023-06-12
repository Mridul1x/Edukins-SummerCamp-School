import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const FeedBack = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Send feedback to the backend
      await axiosSecure.patch(`/classes/${id}/feedback`, { feedback });

      // Clear the input field and show success message
      setFeedback("");
      Swal.fire({
        icon: "success",
        title: "Feedback submitted successfully!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/dashboard/manageClasses"); // Navigate to ManageClasses page
      });
    } catch (error) {
      setError("Error submitting feedback. Please try again.");
      console.error("Error submitting feedback:", error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="text-center mt-12 font-bold">
        Feedback for Class ID: {id}
      </h1>
      <p></p>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="font-semibold" htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            className="w-full"
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="w-full">
          <button
            className="btn btn-primary w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default FeedBack;
