const modeToggle = document.getElementById("mode-toggle");
const fontSelector = document.getElementById("font-selector");
const searchBar = document.querySelector(".search-bar");
const imgElement = document.querySelector(".toggle-wrapper img");
const searchInput = document.querySelector(".search-input");
const options = document.querySelectorAll(" option");

modeToggle.addEventListener("change", () => {
  document.documentElement.setAttribute(
    "data-theme",
    modeToggle.checked ? "dark" : "light"
  );
  searchBar.style.backgroundColor = modeToggle.checked ? "#757575" : "#f4f4f4";
  imgElement.src = modeToggle.checked
    ? "./assets/images/icon-dark-moon.svg"
    : "./assets/images/icon-moon.svg";
  fontSelector.classList.toggle("white-text");
  options.forEach((option) => {
    option.style.backgroundColor = modeToggle.checked ? "#121212" : "#ffffff";
    option.style.color = modeToggle.checked ? "white" : "black";
  });
});
searchInput.addEventListener("click", function () {
  searchBar.style.borderColor = "#A445ED";
  searchBar.style.borderStyle = "solid";
  searchBar.style.borderWidth = "1px";
});

document.addEventListener("click", function (event) {
  // Check if the click was not inside the searchBar or searchInput
  if (
    !searchBar.contains(event.target) &&
    !searchInput.contains(event.target)
  ) {
    searchBar.style.borderColor = "none";
    searchBar.style.borderStyle = "none";
    searchBar.style.borderWidth = "0";
  }
});

fontSelector.addEventListener("change", (e) => {
  document.body.style.fontFamily =
    e.target.value === "serif"
      ? "Georgia, serif"
      : e.target.value === "mono"
      ? "Mono, monospace"
      : "Arial, sans-serif";
}); // Function to fetch the definition of a word
const data =[
    {
      "word": "go",
      "phonetic": "/ɡəʉ/",
      "phonetics": [
        {
          "text": "/ɡəʉ/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/go-1-au.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75271526",
          "license": {
            "name": "BY-SA 4.0",
            "url": "https://creativecommons.org/licenses/by-sa/4.0"
          }
        },
        {
          "text": "/ɡɐʉ/",
          "audio": ""
        },
        {
          "text": "/ɡəʊ/",
          "audio": ""
        },
        {
          "text": "/ɡoʊ/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/go-1-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=711124",
          "license": {
            "name": "BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          }
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "The act of going.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A turn at something, or in something (e.g. a game).",
              "synonyms": [
                "move",
                "stint",
                "turn"
              ],
              "antonyms": [],
              "example": "It’s your go."
            },
            {
              "definition": "An attempt, a try.",
              "synonyms": [
                "attempt",
                "bash",
                "shot",
                "stab",
                "try"
              ],
              "antonyms": [],
              "example": "I’ll give it a go."
            },
            {
              "definition": "An approval or permission to do something, or that which has been approved.",
              "synonyms": [
                "green light"
              ],
              "antonyms": [],
              "example": "We will begin as soon as the boss says it's a go."
            },
            {
              "definition": "An act; the working or operation.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A circumstance or occurrence; an incident, often unexpected.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "The fashion or mode.",
              "synonyms": [
                "mode",
                "style",
                "trend"
              ],
              "antonyms": [],
              "example": "quite the go"
            },
            {
              "definition": "Noisy merriment.",
              "synonyms": [],
              "antonyms": [],
              "example": "a high go"
            },
            {
              "definition": "A glass of spirits; a quantity of spirits.",
              "synonyms": [
                "gage",
                "measure"
              ],
              "antonyms": []
            },
            {
              "definition": "Power of going or doing; energy; vitality; perseverance.",
              "synonyms": [
                "energy",
                "flair",
                "liveliness",
                "perseverance",
                "pizzazz",
                "spirit",
                "verve",
                "vigour",
                "vim",
                "vitality",
                "zest"
              ],
              "antonyms": [],
              "example": "There is no go in him."
            },
            {
              "definition": "The situation where a player cannot play a card which will not carry the aggregate count above thirty-one.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A period of activity.",
              "synonyms": [],
              "antonyms": [],
              "example": "ate it all in one go"
            },
            {
              "definition": "(British slang) A dandy; a fashionable person.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [
            "attempt",
            "bash",
            "shot",
            "stab",
            "try",
            "energy",
            "flair",
            "liveliness",
            "perseverance",
            "pizzazz",
            "spirit",
            "verve",
            "vigour",
            "vim",
            "vitality",
            "zest",
            "gage",
            "measure",
            "green light",
            "mode",
            "style",
            "trend",
            "move",
            "stint",
            "turn"
          ],
          "antonyms": []
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To move:",
              "synonyms": [
                "cross",
                "draw",
                "drift",
                "fare",
                "move",
                "tread",
                "wend"
              ],
              "antonyms": [
                "freeze",
                "halt",
                "remain",
                "stand still",
                "stay",
                "stop"
              ]
            },
            {
              "definition": "(chiefly of a machine) To work or function (properly); to move or perform (as required).",
              "synonyms": [
                "function",
                "operate",
                "work"
              ],
              "antonyms": [],
              "example": "The engine just won't go anymore."
            },
            {
              "definition": "To start; to begin (an action or process).",
              "synonyms": [],
              "antonyms": [],
              "example": "Get ready, get set, go!"
            },
            {
              "definition": "To take a turn, especially in a game.",
              "synonyms": [
                "make one's move",
                "move",
                "take one’s turn"
              ],
              "antonyms": [],
              "example": "It’s your turn; go."
            },
            {
              "definition": "To attend.",
              "synonyms": [],
              "antonyms": [],
              "example": "I go to school at the schoolhouse."
            },
            {
              "definition": "To proceed:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To follow or travel along (a path):",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To extend (from one point in time or space to another).",
              "synonyms": [],
              "antonyms": [],
              "example": "This property goes all the way to the state line."
            },
            {
              "definition": "To lead (to a place); to give access to.",
              "synonyms": [],
              "antonyms": [],
              "example": "Does this road go to Fort Smith?"
            },
            {
              "definition": "To become. (The adjective that follows usually describes a negative state.)",
              "synonyms": [
                "become",
                "change into",
                "turn"
              ],
              "antonyms": [],
              "example": "After failing as a criminal, he decided to go straight."
            },
            {
              "definition": "To assume the obligation or function of; to be, to serve as.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To continuously or habitually be in a state.",
              "synonyms": [],
              "antonyms": [],
              "example": "I don't want my children to go hungry."
            },
            {
              "definition": "To come to (a certain condition or state).",
              "synonyms": [],
              "antonyms": [],
              "example": "They went into debt, she goes to sleep around 10 o'clock."
            },
            {
              "definition": "To change (from one value to another) in the meaning of wend.",
              "synonyms": [],
              "antonyms": [],
              "example": "The traffic light went straight from green to red."
            },
            {
              "definition": "To turn out, to result; to come to (a certain result).",
              "synonyms": [],
              "antonyms": [],
              "example": "How did your meeting with Smith go?"
            },
            {
              "definition": "To tend (toward a result).",
              "synonyms": [],
              "antonyms": [],
              "example": "These experiences go to make us stronger."
            },
            {
              "definition": "To contribute to a (specified) end product or result.",
              "synonyms": [],
              "antonyms": [],
              "example": "qualities that go to make a lady / lip-reader / sharpshooter"
            },
            {
              "definition": "To pass, to be used up:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To die.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To be discarded.",
              "synonyms": [],
              "antonyms": [],
              "example": "This chair has got to go."
            },
            {
              "definition": "To be lost or out:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To break down or apart:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To be sold.",
              "synonyms": [],
              "antonyms": [],
              "example": "Everything must go."
            },
            {
              "definition": "To be given, especially to be assigned or allotted.",
              "synonyms": [],
              "antonyms": [],
              "example": "The award went to Steven Spielberg."
            },
            {
              "definition": "To survive or get by; to last or persist for a stated length of time.",
              "synonyms": [],
              "antonyms": [],
              "example": "Can you two go twenty minutes without arguing?!"
            },
            {
              "definition": "To have a certain record.",
              "synonyms": [],
              "antonyms": [],
              "example": "The team is going five in a row."
            },
            {
              "definition": "To be authoritative, accepted, or valid:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To say (something), to make a sound:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To be expressed or composed (a certain way).",
              "synonyms": [],
              "antonyms": [],
              "example": "As the story goes, he got the idea for the song while sitting in traffic."
            },
            {
              "definition": "To resort (to).",
              "synonyms": [],
              "antonyms": [],
              "example": "I'll go to court if I have to."
            },
            {
              "definition": "To apply or subject oneself to:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To fit (in a place, or together with something):",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To date.",
              "synonyms": [
                "date",
                "go out (with)",
                "see"
              ],
              "antonyms": [],
              "example": "He's been going with her for two weeks."
            },
            {
              "definition": "To attack:",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "To be in general; to be usually.",
              "synonyms": [],
              "antonyms": [],
              "example": "As sentences go, this one is pretty boring."
            },
            {
              "definition": "To take (a particular part or share); to participate in to the extent of.",
              "synonyms": [],
              "antonyms": [],
              "example": "Let's go halves on this."
            },
            {
              "definition": "To yield or weigh.",
              "synonyms": [],
              "antonyms": [],
              "example": "Those babies go five tons apiece."
            },
            {
              "definition": "To offer, bid or bet an amount; to pay.",
              "synonyms": [],
              "antonyms": [],
              "example": "I'll go a ten-spot."
            },
            {
              "definition": "To enjoy. (Compare go for.)",
              "synonyms": [],
              "antonyms": [],
              "example": "I could go a beer right about now."
            },
            {
              "definition": "To urinate or defecate.",
              "synonyms": [],
              "antonyms": [],
              "example": "Have you managed to go today, Mrs. Miggins?"
            }
          ],
          "synonyms": [
            "become",
            "change into",
            "turn",
            "cross",
            "draw",
            "drift",
            "fare",
            "move",
            "tread",
            "wend",
            "date",
            "go out (with)",
            "see",
            "function",
            "operate",
            "work",
            "make one's move",
            "move",
            "take one’s turn"
          ],
          "antonyms": [
            "freeze",
            "halt",
            "remain",
            "stand still",
            "stay",
            "stop"
          ]
        },
        {
          "partOfSpeech": "adjective",
          "definitions": [
            {
              "definition": "Working correctly and ready to commence operation; approved and able to be put into action.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/go"
      ]
    },
    {
      "word": "go",
      "phonetics": [],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "A strategic board game, originally from China, in which two players (black and white) attempt to control the largest area of the board with their counters.",
              "synonyms": [
                "baduk",
                "weiqi"
              ],
              "antonyms": []
            }
          ],
          "synonyms": [
            "baduk",
            "weiqi"
          ],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/go"
      ]
    }
  ]
  
  // Function to dynamically populate the dictionary
  const renderDictionary = (entry) => {
    const mainContainer = document.querySelector("main");
  
    // Add word and phonetics
    const wordTitle = document.getElementById("wordTitle");
    const phonetics = document.getElementById("phonetics");
  
    wordTitle.textContent = entry.word;
    phonetics.textContent = entry.phonetic;
  
    // Add audio playback if available
    const audioIcon = document.getElementById("audioIcon");
    const audioData = entry.phonetics.find((p) => p.audio);
    if (audioData && audioData.audio) {
      audioIcon.onclick = () => {
        const audio = new Audio(audioData.audio);
        audio.play();
      };
    } else {
      audioIcon.style.display = "none";
    }
  
    // Add meanings
    entry.meanings.forEach((meaning) => {
      const section = document.createElement("section");
      section.classList.add("definition");
  
      section.innerHTML = `
        <div style="display: flex; width: 100%; justify-content: space-between; align-items: center;">
          <h2 class="part-of-speech">${meaning.partOfSpeech}</h2>
          <div style="width: 35rem; height: 1px; background-color: #979797;"></div>
        </div>
        <ul class="meaning">
          ${meaning.definitions
            .map(
              (def) => `
            <li>${def.definition}</li>
            ${def.example ? `<blockquote>“${def.example}”</blockquote>` : ""}
          `
            )
            .join("")}
        </ul>
        ${
          meaning.synonyms && meaning.synonyms.length
            ? `
            
            <div  class="synonyms">
            <p class="synonyms-title"> Synonyms:</p>
            <p>
            ${meaning.synonyms.join(", ")}
            </p>
            </div>
            
            `
            : ""
        }
                <footer>
      <div style="width: 100%; height: 1px; background-color: #979797;"></div>

      <p class="source">
      Source: <a href="${entry.sourceUrls[0]}" target="_blank">${entry.sourceUrls[0]}</a>
      </p>
    </footer> 
      `;
  
      mainContainer.appendChild(section);
    });
  };
  
  // Render the dictionary for the first entry
  renderDictionary(data[0]);
  