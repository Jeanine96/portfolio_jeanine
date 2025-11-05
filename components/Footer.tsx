export default function Footer() {
  return (
    <footer className="h-screen bg-primary px-[92] pb-16">
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center grow gap-6">
          <p className="text-text-three text-fontsize-body font-body">
            HEEFT U EEN PASSENDE STAGEOPDRACHT?
          </p>
          <h1 className="text-text-two text-fontsize-h1 font-h1">LET'S TALK</h1>
        </div>
        <div className="flex flex-col gap-8">
          <hr className="border-t border-tertiary my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="text-text-two text-fontsize-body font-body">
              © Jeanine de Regter 2025
            </p>
            <div className="flex flex-row gap-8">
              <img
                className="w-12 h-12"
                src="./linkedin-icon.svg"
                alt="linkedin-icon"
              />
              <img
                className="w-12 h-12"
                src="./github-icon.svg"
                alt="github-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
