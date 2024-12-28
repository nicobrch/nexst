import { GoogleIcon } from "@/components/icons/google";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="md:min-h-screen md:grid md:grid-cols-2">
      {/* Left Panel */}
      <div className="relative hidden md:flex md:flex-col bg-indigo-700 p-8 text-white ">
        <div className="mb-16">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 4L20 20H4L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold">Hello 👋</h1>
          <p className="max-w-md text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="text-sm text-white/70">
          © 2025 Trademark. All rights reserved.
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col p-8 md:p-12">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Trademark</h2>
        </div>
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back!
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </div>
          <div className="space-y-4">
            <LoginForm />
            <Button
              effect="gooeyLeft"
              icon={GoogleIcon}
              iconPlacement="left"
              variant="outline"
              className="w-full"
            >
              Login with Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Forgot password?{" "}
            <a href="#" className="underline">
              Click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
