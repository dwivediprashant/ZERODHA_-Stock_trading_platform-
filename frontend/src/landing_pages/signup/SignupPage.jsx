import Form from "./Form";
import Investment from "./Investment";
import StepsToAccount from "./StepsToAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function SignupPage() {
  return (
    <>
      <Navbar />
      <Form />
      <Investment />
      <StepsToAccount />
      <Footer />
    </>
  );
}

export default SignupPage;
