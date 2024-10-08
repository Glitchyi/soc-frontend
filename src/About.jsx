import Header from "./components/Header";

const About = () => {
  return (
    <div
      className="bg-custom-gradient min-h-screen flex flex-col justify-between"
      id="background"
    >
      <div className="mx-10 mt-10 gap-10 flex flex-col">
        <Header />
        <h1 className="text-6xl underline underline-offset-4 font-bold text-darkpacha">
          About
        </h1>
        <div>
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This proposal outlines the plan for hosting{" "}
              <strong>Season Of Commits Fest 2024</strong> at{" "}
              <strong>
                Muthoot Institute of Technology and Science (MITS)
              </strong>
              . Season Of Commits Fest is inspired by the global Hacktoberfest
              initiative, aimed at encouraging open-source contributions
              through collaboration, learning, and hands-on project development.
              By organizing this event at MITS, we aim to foster an open-source
              culture, provide students with practical experience, and enable
              them to contribute to real-world projects while enhancing their
              technical skills.
            </p>
          </section>

          {/* Objective Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Objective
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The primary objective of{" "}
              <strong>Season Of Commits Fest 2024</strong> is to engage students
              in contributing to open-source repositories managed by various
              teams within MITS. The event seeks to empower students to make
              meaningful contributions to software projects, ranging from bug
              fixes to feature development, while helping them understand the
              dynamics of collaboration in the open-source community.
            </p>
          </section>

          {/* Timeline Section */}
          <section className="mb-10 w-full">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Timeline
            </h2>
            <div className="flex items-center justify-center ">
            <img
            src="/timeline.svg" className="w-3/4"/>
            </div>
          </section>

          {/* Resources Required Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Resources Required
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Access to open-source repositories on GitHub.</li>
              <li>
                A system for tracking contributions and maintaining the
                leaderboard.
              </li>
              <li>Prizes and awards for contributors.</li>
              <li>
                A team of mentors and maintainers to guide and review
                contributions.
              </li>
            </ul>
          </section>

          {/* Conclusion Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Season Of Commits Fest 2024</strong> will provide students
              at MITS with a unique opportunity to engage in open-source
              software development, enhancing their skills while making
              meaningful contributions to real-world projects. This event will
              not only foster collaboration but also help participants build a
              strong foundation in open-source technologies, preparing them for
              future careers in tech. <br />
              <br />
              We are excited about the potential of{" "}
              <strong>Season Of Commits Fest 2024</strong> to positively impact
              the student community and encourage long-term participation in
              open-source development. We look forward to working together to
              ensure the event's success.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;