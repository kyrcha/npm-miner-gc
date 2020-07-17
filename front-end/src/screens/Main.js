import React from "react";
import { BeatLoader } from "react-spinners";
import TopTen from "../components/TopTen";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Main() {
  let history = useHistory();

  const [value, setValue] = useState("");
  const [loading] = useState(true);
  const [topStars] = useState([]);
  const [packages] = useState(100);
  const [loc] = useState(0);
  const [packagesPerDay] = useState(0);
  const [trivialPackages] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const path = `/search?q=${value}`;
    history.push(path);
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to npm-miner!</h1>
            <h2 className="subtitle">
              npm-miner aggregates the results of popular static analysis tools
              in order to provide insights about the software quality on the npm
              ecosystem.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column">
              <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input is-rounded"
                      type="text"
                      placeholder="Search for a package"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="control">
                    <input
                      type="submit"
                      className="button is-black is-rounded"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-1"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                {!loading ? (
                  <div>
                    <p className="title">
                      <NumberFormat
                        value={packages}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                    <p className="subtitle">packages mined</p>
                  </div>
                ) : (
                  <BeatLoader color={"black"} />
                )}
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                {!loading ? (
                  <div>
                    <p className="title">
                      <NumberFormat
                        value={loc}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                    <p className="subtitle">lines of code checked</p>
                  </div>
                ) : (
                  <BeatLoader color={"black"} />
                )}
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                {!loading ? (
                  <div>
                    <p className="title">
                      <NumberFormat
                        value={packagesPerDay}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                    <p className="subtitle">packages mined last 24h</p>
                  </div>
                ) : (
                  <BeatLoader color={"black"} />
                )}
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                {!loading ? (
                  <div>
                    <p className="title">
                      <NumberFormat
                        value={trivialPackages}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      ({Number((100 * trivialPackages) / packages).toFixed(2)}
                      %)
                    </p>
                    <p className="subtitle">
                      trivial packages{" "}
                      <span
                        data-tip
                        data-for="trivialPackages"
                        class="icon has-text-info"
                      >
                        <FontAwesomeIcon icon={faInfoCircle} color="black" />
                      </span>
                      <ReactTooltip
                        id="trivialPackages"
                        place="bottom"
                        type="dark"
                        effect="solid"
                        multiline="true"
                      >
                        <span>
                          A trivial package is considered as a package
                          <br /> with less that 35 lines of code and <br />
                          less than 10 McCabe's cyclomatic complexity
                          (Abdalkareem et al., 2017).
                        </span>
                      </ReactTooltip>
                    </p>
                  </div>
                ) : (
                  <BeatLoader color={"black"} />
                )}
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-one-third"></div>
            <div className="column is-one-third">
              {!loading ? (
                <TopTen
                  title={"Top 10 Starred GitHub Repos in npm"}
                  name={"Repository"}
                  score={"Stars"}
                  packages={topStars}
                />
              ) : (
                <BeatLoader color={"black"} />
              )}
            </div>
            {/* <div className="column is-one-third"><TopTen/></div>
                <div className="column is-one-third"><TopTen/></div> */}
          </div>
          <div className="column is-one-third"></div>
        </div>
      </section>
    </div>
  );
}

export default Main;
