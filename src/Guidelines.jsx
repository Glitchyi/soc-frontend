
const Guidelines = () => {
  return (
    <div
      className=" min-h-screen flex flex-col justify-between"
      id="background"
    >
      <div className="mx-10 mt-10 gap-10 flex flex-col">

        <h1 className="text-6xl underline underline-offset-4 font-bold text-darkpacha">
          Guidelines
        </h1>
        <div>
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Event Scope</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The <strong>Season Of Commits Fest 2024</strong> will be a month-long event where students across different departments can participate. They will contribute to a range of GitHub repositories owned by MITS-based teams, with projects spanning areas such as web development, mobile apps, data science, and more. Mentors will be available throughout the event to guide participants in making impactful contributions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Areas of Contribution</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Code enhancements and new feature implementation</li>
              <li>Bug fixing and resolution</li>
              <li>Improvements in project documentation</li>
              <li>User experience and design updates</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Open Repositories</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Participants will have access to a variety of open-source repositories. Each repository will come with detailed contribution guidelines, making it easier for participants to understand how and where they can contribute. Since the maintainers of these repositories are final-year students, it will be easier for participants to contact and have insightful discussions with them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Contribution Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Contributions will be made through forking the repository, making changes, and submitting pull requests (PRs). PRs will be reviewed by repository maintainers.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Fork and Pull Requests (PRs): Participants will fork the repositories, make their contributions, and submit pull requests.</li>
              <li>Types of Contributions: Code development, bug fixes, documentation enhancements, and testing.</li>
              <li>Review by Maintainers: Each PR must be reviewed and approved by at least two maintainers before it can be merged into the main repository.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Evaluation and Point System</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contributions will be evaluated based on the following criteria:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Code Quality:</strong> Well-structured, maintainable, and optimized code will be rewarded with higher points.</li>
              <li><strong>Impact:</strong> Submissions that address key issues or bring substantial improvements will earn additional points.</li>
              <li><strong>Documentation:</strong> Enhancements that improve the clarity, structure, and accessibility of documentation will also be acknowledged.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Leaderboard and Recognition</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A leaderboard will track participants progress, ranking them based on the points they earn for their contributions. This system encourages healthy competition while rewarding those who make significant, high-quality contributions. The leaderboard will be updated regularly to keep participants motivated.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Mentorship and Support</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mentors and repository maintainers will provide ongoing support, offering guidance on technical challenges and reviewing contributions. They will ensure participants have a positive learning experience throughout the event.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Incentives and Rewards</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Special Prizes:</strong> Top contributors will be recognized with awards and prizes.</li>
              <li><strong>Recognition within MITS:</strong> High-ranking participants will be recognized publicly within the college and may have the opportunity to work on official projects for MITS.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;