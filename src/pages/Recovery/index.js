import Header from "../../components/Header";
import RecoveryComponent from "../../components/Recovery";

export default function RecoveryPage() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Find your account"
          paragraph="Already have an account?"
          linkName="Login"
          linkUrl="/login"
        />
        <RecoveryComponent />
      </div>
    </div>
  );
}
