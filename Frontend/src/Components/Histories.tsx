import MKC from "../assets/image.png";

function History() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2
          data-aos="fade-down"
          className="font-cormorant text-4xl font-bold text-center text-slate-800 md:text-5xl"
        >
          Our History
        </h2>

        <div className="mt-10 grid items-center gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              Meserete Kristos Church (MKC), meaning “Christ is the Foundation,”
              began in Ethiopia through the work of Mennonite missionaries and
              Ethiopian believers. On June 16, 1951, ten Ethiopian believers
              were baptized in Addis Ababa, marking the beginning of the church.
              The name Meserete Kristos was later adopted in 1956, reflecting
              the church’s foundation in Jesus Christ and 1 Corinthians 3:11.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              Over the following decades, MKC became increasingly led by
              Ethiopian Christians and developed as an indigenous Ethiopian
              church. During the Derg regime, the government closed the church
              in 1982 and confiscated its properties. Rather than disappearing,
              believers continued worshiping secretly in homes and small groups,
              and the church grew significantly despite persecution.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              After the fall of the Derg in 1991, MKC was able to worship openly
              again and continued its rapid growth through evangelism,
              discipleship, and church planting. Today, Meserete Kristos Church
              is one of Ethiopia’s largest evangelical churches and one of the
              world’s largest Anabaptist churches, continuing its mission with
              Christ as its foundation.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 bg-slate-100">
              <img
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                src={MKC}
                alt="Meserete Kristos Church history"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
