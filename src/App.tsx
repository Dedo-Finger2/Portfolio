import QuickAboutMe from "./components/QuickAboutMe";

export default function App() {
  return (
    <div className="flex flex-col px-12 py-6">
      {/* Left Side (Quick info) */}
      <QuickAboutMe />
      {/* Right Side (Large info) */}
    </div>
  );
}
