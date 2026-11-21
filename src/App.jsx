
import { useState } from "react";

// ==========================================
// PERSONALISE YOUR WEBSITE HERE
// ==========================================

const HER_NAME = "My ladybug";
const YOUR_NAME = "Cat noir";

const memories = [
  {
    date: "THE BEGINNING",
    title: "The day our story started",
    description:
      "I don't know if I realised it then, but that conversation became one of my favourite memories.",
    image: "/memory1.jpg",
    emoji: "🌷",
  },
  {
    date: "A SPECIAL MOMENT",
    title: "A memory I always smile about",
    description:
      "Some moments are small, but they stay in our hearts forever.",
    image: "/memory2.jpg",
    emoji: "💗",
  },
  {
    date: "TODAY",
    title: "Still choosing you",
    description:
      "Different cities, different skies, but someone who still makes my day special.",
    image: "/memory3.jpg",
    emoji: "🌙",
  },
];

const questions = [
  {
    question: "What is my favourite thing about you?",
    options: [
      "Your smile",
      "Your cute habits",
      "Your personality",
      "Everything about you",
    ],
    answer: 3,
    result: "It's honestly everything. ❤️",
  },
  {
    question: "What would I choose for our perfect date?",
    options: [
      "A long walk together",
      "A candlelight dinner",
      "Watching movies together",
      "Anything, as long as we're together",
    ],
    answer: 3,
    result: "Exactly! The place doesn't matter. You do.",
  },
  {
    question: "What do I wish right now?",
    options: [
      "To travel somewhere",
      "To buy something",
      "To meet you and hug you",
      "To sleep all day",
    ],
    answer: 2,
    result: "You know me better than I can explain. ❤️",
  },
  {
    question: "What is my favourite notification?",
    options: [
      "Instagram",
      "Your message",
      "YouTube",
      "Email",
    ],
    answer: 1,
    result: "Your name on my screen. Always.",
  },
];

const letters = [
  {
    title: "Open when you're sad",
    emoji: "🥺",
    message:
      "Hey, take a deep breath. You don't have to pretend to be okay all the time. I wish I could sit beside you, listen to everything and remind you how wonderful you are. You matter so much to me. ❤️",
  },
  {
    title: "Open when you miss me",
    emoji: "🌙",
    message:
      "I miss you too. Sometimes I wish distance was just a button I could turn off. Until we meet, remember that somewhere, someone is thinking about you and smiling because you exist.",
  },
  {
    title: "Open when you're angry",
    emoji: "🫶",
    message:
      "It's okay to feel angry. I don't expect us to agree on everything. I want us to communicate, understand each other and never forget that we are on the same team.",
  },
  {
    title: "Open before sleeping",
    emoji: "🌸",
    message:
      "I hope today gave you at least one reason to smile. Let go of everything that made your day difficult. You deserve peaceful sleep and beautiful dreams. Goodnight.",
  },
  {
    title: "Open when we finally meet",
    emoji: "❤️",
    message:
      "If you're reading this, maybe the distance has finally become a memory. I hope I get to look into your eyes, smile and tell you how long I've waited for this hug. No screen, no network, no distance. Just us.",
  },
];

const reasons = [
  "Your smile changes my mood.",
  "I love the way you talk.",
  "Your little habits make me smile.",
  "You make ordinary days feel special.",
  "I love hearing your voice.",
  "You inspire me to become better.",
  "I love our random conversations.",
  "You have your own beautiful way of thinking.",
  "You make me feel understood.",
  "Simply because you're you.",
];

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openedLetter, setOpenedLetter] = useState(null);
  const [gardenMessage, setGardenMessage] = useState("");

  const navigation = [
    ["home", "Home", "⌂"],
    ["memories", "Memories", "♡"],
    ["quiz", "Our Quiz", "✧"],
    ["letters", "Letters", "✉"],
    ["garden", "Garden", "❀"],
    ["voice", "My Voice", "♫"],
  ];

  function answerQuestion(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === questions[quizIndex].answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (quizIndex + 1 === questions.length) {
      setQuizDone(true);
    } else {
      setQuizIndex((previous) => previous + 1);
    }
    setSelected(null);
  }

  function restartQuiz() {
    setQuizIndex(0);
    setScore(0);
    setQuizDone(false);
    setSelected(null);
  }

  return (
    <div className="min-h-screen romantic-gradient">

      {/* NAVIGATION */}

      <nav className="sticky top-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => setActiveTab("home")}
            className="text-2xl tracking-widest text-pink-200"
          >
            HER<span className="text-pink-400">.</span>
          </button>

          <div className="hidden md:flex gap-5 text-sm text-pink-100">
            {navigation.map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`hover:text-pink-300 transition ${
                  activeTab === id ? "text-pink-400" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <span className="text-pink-300">♥</span>
        </div>

        <div className="md:hidden flex overflow-x-auto gap-5 px-4 pb-3 text-sm">
          {navigation.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`whitespace-nowrap ${
                activeTab === id ? "text-pink-300" : "text-gray-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-5 py-12">

        {/* HOME */}

        {activeTab === "home" && (
          <div className="text-center fade-up py-12">

            <p className="text-pink-300 tracking-[5px] text-xs mb-8">
              A PERSONAL LITTLE UNIVERSE
            </p>

            <div className="text-6xl float mb-8">🌹</div>

            <h1 className="hero-title text-5xl md:text-7xl font-romantic mb-6">
              Hey, {HER_NAME}.
            </h1>

            <p className="text-pink-100/70 text-lg max-w-xl mx-auto leading-8">
              If I could give you one thing in this world,
              it would be the ability to see yourself through
              my eyes. Then you would understand how special
              you really are.
            </p>

            <p className="text-pink-300 mt-8 italic">
              "A little world, made just for you."
            </p>

            <button
              onClick={() => setActiveTab("memories")}
              className="mt-12 bg-pink-300 text-gray-950 rounded-full px-9 py-4 hover:bg-pink-200 transition shadow-lg shadow-pink-900/30"
            >
              Enter Our World ♥
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
              {[
                ["♡", "Our Memories", "memories"],
                ["✧", "Our Quiz", "quiz"],
                ["✉", "Secret Letters", "letters"],
                ["❀", "Magic Garden", "garden"],
              ].map(([icon, label, tab]) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="glass glow rounded-2xl p-6 hover:border-pink-300 transition"
                >
                  <div className="text-3xl text-pink-300">{icon}</div>
                  <p className="mt-3 text-sm">{label}</p>
                </button>
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-20">
              Crafted with love by {YOUR_NAME} ♥
            </p>
          </div>
        )}

        {/* MEMORIES */}

        {activeTab === "memories" && (
          <section className="fade-up">
            <SectionTitle
              small="EVERY MOMENT MATTERS"
              title="Our Little Memories"
              subtitle="Some moments deserve to live forever."
            />

            <div className="relative border-l border-pink-400/30 ml-4 mt-14 space-y-12">
              {memories.map((memory, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50" />

                  <div className="glass rounded-2xl p-6">
                    {memory.image ? (
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-52 object-cover rounded-xl mb-5"
                      />
                    ) : (
                      <div className="bg-pink-300/10 rounded-xl h-32 flex items-center justify-center text-5xl mb-5">
                        {memory.emoji}
                      </div>
                    )}

                    <p className="text-xs tracking-widest text-pink-300">
                      {memory.date}
                    </p>

                    <h3 className="text-xl mt-2 text-pink-100">
                      {memory.title}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-7">
                      {memory.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-pink-300 italic">
                Our story is still being written... ♥
              </p>
            </div>
          </section>
        )}

        {/* QUIZ */}

        {activeTab === "quiz" && (
          <section className="fade-up max-w-2xl mx-auto">
            <SectionTitle
              small="A LITTLE GAME"
              title="How Well Do You Know Us?"
              subtitle="Let's see how well you know what's in my heart."
            />

            {!quizDone ? (
              <div className="glass rounded-3xl p-7 mt-12">

                <div className="flex justify-between text-xs text-pink-300 mb-5">
                  <span>QUESTION {quizIndex + 1}</span>
                  <span>{questions.length} TOTAL</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-1 mb-9">
                  <div
                    className="bg-pink-400 h-1 rounded-full transition-all"
                    style={{
                      width: `${
                        ((quizIndex + 1) / questions.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <h2 className="text-2xl text-center leading-9 mb-8">
                  {questions[quizIndex].question}
                </h2>

                <div className="space-y-3">
                  {questions[quizIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => answerQuestion(index)}
                      className={`w-full rounded-xl p-4 text-left border transition ${
                        selected === index
                          ? "bg-pink-400/20 border-pink-300"
                          : "bg-white/5 border-white/10 hover:border-pink-300/60"
                      }`}
                    >
                      {option}
                      {selected === index &&
                        (index === questions[quizIndex].answer
                          ? " ♥"
                          : " ✧")}
                    </button>
                  ))}
                </div>

                {selected !== null && (
                  <div className="mt-7 text-center letter-open">
                    <p className="text-pink-200">
                      {selected === questions[quizIndex].answer
                        ? questions[quizIndex].result
                        : "Aww, that's okay! Every answer is a new memory. ❤️"}
                    </p>

                    <button
                      onClick={nextQuestion}
                      className="mt-6 bg-pink-300 text-black rounded-full px-8 py-3"
                    >
                      {quizIndex + 1 === questions.length
                        ? "See Your Result"
                        : "Next Question →"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass rounded-3xl p-10 text-center mt-12">
                <div className="text-6xl mb-6">💗</div>
                <h2 className="text-3xl text-pink-200">
                  You scored {score}/{questions.length}
                </h2>
                <p className="text-gray-300 mt-5 leading-8">
                  But honestly, the real winner is me,
                  because I get to know someone like you.
                </p>
                <button
                  onClick={restartQuiz}
                  className="mt-8 bg-pink-300 text-black rounded-full px-7 py-3"
                >
                  Play Again
                </button>
              </div>
            )}
          </section>
        )}

        {/* SECRET LETTERS */}

        {activeTab === "letters" && (
          <section className="fade-up">
            <SectionTitle
              small="WORDS FROM MY HEART"
              title="Open When..."
              subtitle="Little letters for different moments in your life."
            />

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {letters.map((letter, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-7 text-center"
                >
                  <div className="text-5xl mb-5">{letter.emoji}</div>
                  <h3 className="text-lg text-pink-100">
                    {letter.title}
                  </h3>

                  <button
                    onClick={() =>
                      setOpenedLetter(
                        openedLetter === index ? null : index
                      )
                    }
                    className="mt-6 border border-pink-300/50 text-pink-200 rounded-full px-6 py-2 hover:bg-pink-300 hover:text-black transition"
                  >
                    {openedLetter === index ? "Close Letter" : "Open Letter"}
                  </button>

                  {openedLetter === index && (
                    <div className="letter-open border-t border-pink-300/20 mt-6 pt-6 text-gray-300 leading-8 text-sm">
                      {letter.message}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIRTUAL GARDEN */}

        {activeTab === "garden" && (
          <section className="fade-up text-center">
            <SectionTitle
              small="A GARDEN FOR YOU"
              title="Our Little Garden"
              subtitle="Every flower has something to tell you. Touch one."
            />

            <div className="glass rounded-3xl p-8 mt-12">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-7 max-w-xl mx-auto">
                {[
                  "🌹", "🌷", "🌸", "🌻", "🌺",
                  "💐", "🌼", "🌷", "🌹", "🌸",
                ].map((flower, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setGardenMessage(reasons[index])
                    }
                    className="flower text-4xl sm:text-5xl"
                    aria-label={`Open flower ${index + 1}`}
                  >
                    {flower}
                  </button>
                ))}
              </div>

              <div className="min-h-28 flex items-center justify-center mt-10">
                {gardenMessage ? (
                  <div className="letter-open">
                    <div className="text-3xl mb-3">💗</div>
                    <p className="text-pink-200 text-lg">
                      {gardenMessage}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">
                    Pick a flower to reveal a little secret...
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-6">
                A garden that grows with every little reason to smile.
              </p>
            </div>
          </section>
        )}

        {/* VOICE MESSAGE */}

        {activeTab === "voice" && (
          <section className="fade-up max-w-xl mx-auto text-center">
            <SectionTitle
              small="SOMETHING FROM ME"
              title="My Voice, Just For You"
              subtitle="Because sometimes words are better when spoken."
            />

            <div className="glass rounded-3xl p-9 mt-12">
              <div className="text-7xl float mb-8">🎧</div>

              <h3 className="text-xl text-pink-200">
                A little message from {YOUR_NAME}
              </h3>

              <p className="text-gray-400 text-sm mt-4 mb-8 leading-7">
                I wanted you to hear my voice whenever
                you miss me. This recording is only for you.
              </p>

              <audio controls preload="metadata">
                <source src="/voice.m4a" type="audio/mp4" />
                Your browser does not support audio.
              </audio>

              <p className="text-xs text-gray-500 mt-5">
                A little piece of me, wherever you are. ❤️
              </p>
            </div>
          </section>
        )}

      </main>

      <footer className="border-t border-pink-300/10 mt-20 py-10 text-center">
        <p className="text-pink-300 text-2xl">♥</p>
        <p className="text-gray-400 text-sm mt-3">
          Made with love, patience and a little bit of code.
        </p>
        <p className="text-pink-200 mt-2 text-xs tracking-widest">
          {YOUR_NAME} → {HER_NAME}
        </p>
      </footer>

    </div>
  );
}

// ==========================================
// REUSABLE SECTION TITLE
// ==========================================

function SectionTitle({ small, title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-xs text-pink-300 tracking-[4px] mb-5">
        {small}
      </p>
      <h1 className="hero-title text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="text-gray-400 mt-5 leading-7">
        {subtitle}
      </p>
    </div>
  );
}
