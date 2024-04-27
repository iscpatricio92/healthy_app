import Header from "../../components/Header";
import RecoveryComponent from "../../components/Recovery";

export default function RecoveryPage() {
  return (
    <>
      <Header
        heading="Find your account"
        paragraph="Already have an account?"
        linkName="Login"
        linkUrl="/"
      />
      <RecoveryComponent />
    </>
  );
}
