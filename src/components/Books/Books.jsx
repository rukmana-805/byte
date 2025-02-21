import React from "react";
import "../Books/Books.css";
import JavaBook from "../../assets/javabook.jpeg";

const Books = () => {
  return (
    <div>
      <div className="books-recomendation">
        <h1>Books Recomendation</h1>
        <div className="books">
          <div className="book-dsa">
            <div className="book-img-div">
              <img src={JavaBook} alt="" />
            </div>
            <div className="book-desc">
              <h4>Introduction to Java</h4>
              <p>
                This book clear basic fundamental on Java Programming language
              </p>
              <p>
                <span>Author : </span>K. Somasundaram
              </p>
              <div className="download-book"><button>Downlord Now</button></div>
            </div>
          </div>
          <div className="book-c">
            <div className="book-img-div">
              <img src={JavaBook} alt="" />
            </div>
            <div className="book-desc">
              <h4>Introduction to Java</h4>
              <p>
                This book clear basic fundamental on Java Programming language
              </p>
              <p>
                <span>Author : </span>K. Somasundaram
              </p>
              <div className="download-book"><button>Downlord Now</button></div>
            </div>
          </div>
          <div className="book-javascript">
            <div className="book-img-div">
              <img src={JavaBook} alt="" />
            </div>
            <div className="book-desc">
              <h4>Introduction to Java</h4>
              <p>
                This book clear basic fundamental on Java Programming language
              </p>
              <p>
                <span>Author : </span>K. Somasundaram
              </p>
              <div className="download-book"><button>Downlord Now</button></div>
            </div>
          </div>
          <div className="book-ai">
            <div className="book-img-div">
              <img src={JavaBook} alt="" />
            </div>
            <div className="book-desc">
              <h4>Introduction to Java</h4>
              <p>
                This book clear basic fundamental on Java Programming language
              </p>
              <p>
                <span>Author : </span>K. Somasundaram
              </p>
              <div className="download-book"><button>Downlord Now</button></div>
            </div>
          </div>
        </div>
        <div className="see-all-books"><button>See All Recomendation</button></div>
      </div>
    </div>
  );
};

export default Books;
