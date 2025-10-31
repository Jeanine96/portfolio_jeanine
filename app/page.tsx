export default function Home() {
  return (
    <main>
      <section className="homePage">
        <div className="text-frontpage ml-[152] mt-[200] w-[400]">
          <div className="text-title">
            <h2 className="text-text-two text-fontsize-h2 font-h2">
              Front-end
            </h2>
            <div className="title flex flex-row items-center gap-4 ">
              <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
                Developer
              </h2>
              <span className="material-symbols-rounded text-text-three !text-5xl">
                health_metrics
              </span>
            </div>
          </div>
          <p className="text-text-three text-fontsize-body font-body">
            Ik vind het interessant om digitale producten te ontwikkelen voor de
            medische wereld.
          </p>
        </div>
      </section>
    </main>
  );
}
