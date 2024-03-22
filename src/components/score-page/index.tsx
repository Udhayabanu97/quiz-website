import { Link, useLocation } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material";
import quizData from "../../quiz-data/Data";
import { RotateRightOutlined } from "@mui/icons-material";

const OuterBox = styled(Box)({
  border: "1.5px solid rgba(255, 255, 255, 0.8)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "100%",
  maxWidth: "360px",
});

const RestartButton = styled(Button)({
  marginTop: "10px",
  background: "linear-gradient(to right,#03c9fa,#7803d7)",
});

const MessageBox = styled(Box)({
  border: "2px solid #3f51b5", // Add border style
  borderRadius: "8px", // Add border radius
  padding: "15px", // Add padding
  marginBottom: "20px", // Add margin bottom
  color: "violet",
  maxWidth: "85%", // Adjusted maxWidth for responsiveness
  margin: "0 auto",
});

const ScorePage = () => {
  const location = useLocation(); // Use without specifying type arguments
  const state = location.state;

  const userAnswers = state?.userAnswers || [];

  const calculateScore = () => {
    let score = 0;
    // Check if state object and userAnswers property are not null or undefined
    if (state?.userAnswers) {
      state.userAnswers.forEach((answer: string, index: number) => {
        if (answer === quizData[index].correctAnswer) {
          score++;
        }
      });
    }
    return score;
  };

  const score = calculateScore();
  const totalQuestions = quizData.length;

  const percentage = (score / totalQuestions) * 100;
  let message = "";
  if (percentage === 100) {
    message = "Congratulations! You got all questions correct!";
  } else if (percentage >= 80) {
    message = "Great job! You performed very well!";
  } else if (percentage >= 50) {
    message = "Good effort! You can try again to improve your score!";
  } else {
    message = "Keep practicing! You can do better next time!";
  }

  // alert(message);

  return (
    <Container sx={{ display: { xs: "block", sm: "block" } }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="transparent"
      >
        <Typography variant="h4" gutterBottom style={{ color: "white" }}>
          Score
        </Typography>
        <OuterBox>
          <MessageBox>
            <Typography
              variant="h6"
              component="p"
              maxWidth="280px"
              width="100%"
              gutterBottom
            >
              {message}
            </Typography>
          </MessageBox>
          <Typography
            variant="h6"
            gutterBottom
            mt={2}
            fontWeight={800}
            fontSize={24}
          >
            Your Score: {score}/{totalQuestions}
          </Typography>
          <Link
            to="/review"
            state={{ userAnswers }}
            style={{ textDecoration: "none" }}
          >
            <Button style={{ color: "#6495ed" }}>Tap to Review</Button>
          </Link>
          <Typography variant="body1" gutterBottom mt={1}>
            Click here to Restart Your Quiz Again
          </Typography>
          <Link to="/quiz">
            <RestartButton
              variant="contained"
              startIcon={<RotateRightOutlined />}
            >
              Restart
            </RestartButton>
          </Link>
        </OuterBox>
      </Box>
    </Container>
  );
};

export default ScorePage;
