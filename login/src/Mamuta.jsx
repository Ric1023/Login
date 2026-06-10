import './Mamuta.css';
import { useEffect } from 'react';

export default function Mamuta() {
  useEffect(() => {
    document.body.id = 'mamuta-body';
    document.body.className = 'mamuta-body';
    document.title = 'Mamuta';
  }, []);

  return (
    <div className="mamuta-container">
      <h1 className="mamuta-header">
        Welcome to the Mamuta page!
      </h1>

      <div className="mamuta-content">
        <div className="mamuta-game-container">
          <p className="game-title">
            Pikmin 1
          </p>

          <img className="mamuta-image" src="images/pikmin1-mamuta.jpeg" alt="Pikmin 1" />

          <p className="mamuta-description">
            The mamuta is an optional boss in Pikmin 1. It only appears in even-numbered days starting on day 8. It plants pikmin on the ground by smashing them with it's hands, which automatically turns the pikmin into flowers. What's interesting is it's stated that the mamuta is the adult version of a Smoky Progg, the most powerful boss in Pikmin 1. How funny the most deadliest boss as a baby turns into a harmless creature when it grows up.
          </p>
        </div>

        <div className="mamuta-game-container">
          <p className="game-title">
            Pikmin 2
          </p>

          <img className="mamuta-image" src="images/pikmin2-mamuta.jpeg" alt="Pikmin 2" />

          <p className="mamuta-description">
            Family: Unkown Family <br></br>
            Scientific Name: Unknown <br></br>
            Edible?: Inedible. Taste like chicken. <br></br>
            Description: The mamuta is found in underground caves in the game and is commonly found in Rest sublevels where there are no enemies found besides the Mamuta, flint beetles, bulbmin, and marked spectralids. 
          </p>
        </div>

        <div className="mamuta-game-container">
          <p className="game-title">
            Pikmin 3
          </p>

          <p className="mamuta-description">
            No information available. Why? Because the mamuta is not present in Pikmin 3.
          </p>
        </div>

        <div className="mamuta-game-container">
          <p className="game-title">
            Pikmin 4
          </p>

          <img className="mamuta-image" src="images/pikmin4-mamuta.jpeg" alt="Pikmin 4" />
          <p className="mamuta-description">
            With how far graphics have gone from Pikmin 1 to Pikmin 4, it turns out that the mamuta has fur, which is interesting because I always thought it has like a rocky texture in Pikmin 1 and 2. Unlike Pikmin 2, you can find Mamutas in the overworld just relaxing. 
          </p>
        </div>
      </div>

      <div className="mamuta-piklopedia-container">
        <p className="mamuta-piklopedia">
          Want to learn more about the mamuta? Here's a link to the Japanese Piklopedia for the mamuta: <a className="mamuta-link" href="https://www.nintendo.com/jp/character/pikmin/book/mamuta.html" target="_blank">
            Piklopedia - Mamuta
          </a>
        </p>
      </div>
    </div>
  )
}