import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const login = params.get("login");
  const avatar = params.get("avatar_url");
  const html_url = params.get("html_url");

  // Save variables to local storage under a user class
  const user = {
    login: login,
    avatar: avatar,
    html_url: html_url,
  };

  const saveuser = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="px-12 h-full">
      <div className=" h-full flex items-center">
        <div className="w-1/2 h-[80%] border-r-2 border-black/60 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold">Complete your profile, </h1>
            <div className="flex gap-2 items-center w-full">
              <img src={avatar} alt="" className="rounded-full w-12" />
              <p className="text-4xl font-bold">{login}</p>
            </div>
            <form
              className="[&>input]:w-full [&>input]:rounded-lg [&>input]:h-16 [&>input]:shadow-lg [&>input]:px-5 [&>input]:text-xl [&>input]:border-2 [&>input]:border-black w-full flex flex-col items-start [&>input]:mt-2 [&>input]:mb-5 [&>label]:font-bold"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get("name"),
                  contact: formData.get("number"),
                  email: formData.get("email"),
                  user: user,
                };

                try {
                  const response = await fetch(
                    "http://localhost:5000/register",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  );

                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }

                  const result = await response.json();
                  if (result.error){
                    alert(result.error);
                    return;
                  }
                  console.log("Success:", result);
                  saveuser(); // Call saveuser after successful submission

                  navigate("/dashboard");
                  
                } catch (error) {
                  alert("Error: Network response was not ok, please inform / contact organizers");
                  console.error("Error:", error);
                }
              }}
            >
              <label htmlFor="name">NAME</label>
              <input name="name" type="text" placeholder="Advaith Naryanan" />
              <label htmlFor="number">Contact</label>
              <div
                  className="flex bg-white items-center w-full rounded-lg h-16 shadow-lg text-xl border-2 border-black mt-2 mb-5"
              >
                <p className="px-4 border-r-2">+91</p>
                <input className="w-full h-full px-2" name="number" type="tel"/>
              </div>
              <label htmlFor="number">College Mail</label>
              <input name="email" type="email" />
              <button className="font-bold text-xl text-white bg-black pl-8 pr-20 py-3 rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="w-1/2 h-[80%]">
          <div className="flex flex-col gap-8 [&>p]:text-xl pl-16 pt-10">
            <h1 className="text-6xl font-bold underline">Guidelines</h1>
            <p>
              Event will be happening from the {import.meta.env.VITE_START_DATE}{" "}
              to {import.meta.env.VITE_END_DATE} 2025
            </p>
            <p>
              The event is only <b>open</b> to the students at{" "}
              <b>{import.meta.env.VITE_COLLEGE_NAME}</b>
            </p>
            <h3 className="text-3xl font-bold">
              Contributions will be evaluated based on:
            </h3>
            <p>
              <b>Code Quality:</b> Well-structured, maintainable, and optimized
              code will only be considered.
            </p>

            <p>
              <b>Documentation:</b> Enhancing the clarity, structure, and
              accessibility of documentation will be acknowledged.
            </p>
            <p>
              <b>Spam And Cheating:</b> Simply updating the README.md and only
              using ChatGPT will not be considered and{" "}
              <b>if flagged more than two times</b>
              the user will be removed
            </p>
            <div className="pt-10  flex items-center gap-5">
              <p className="underline font-semibold text-2xl">
                Get all details here
              </p>

              {/* Dont worry this is a known property */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                // eslint-disable-next-line react/no-unknown-property
                stroke-width="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
