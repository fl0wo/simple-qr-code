import "tailwindcss/tailwind.css"
import Head from "next/head"
import {Footer} from "@/src/ui/Footer";
import {useState} from "react";
import QRCode from "react-qr-code";

export default function Home() {

    const [qrCodeText, setQrCodeText] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState<string|undefined>();

    const genQrCodeButtonClicked = () => {
        console.log("Generate QR code button clicked");
        setQrCodeValue(qrCodeText);
    }

  return (
      <div className="container">
          <Head>
              <title>Gen QR</title>
          </Head>

          <main>
              <h1 className="title">
                  Gen a <a href="">QR.</a>
              </h1>

              <div style={{display: "flex", flexDirection: "column"}}>
                  <div style={{display: "flex", flexDirection: "row", marginTop: "2rem"}}>
                      {/*<p className="content">*/}
                      <input
                          value={qrCodeText}
                          onChange={(e) => setQrCodeText(e.target.value)}
                          type="text"
                          size={25}
                          height={100}
                          style={{fontSize: 50}}
                          className="border-2 border-gray-300 p-2"
                          placeholder="Enter Name"
                      />

                      <button
                          className="button"
                          onClick={genQrCodeButtonClicked}>
                          Generate
                      </button>
                  </div>

                  {
                      qrCodeValue &&
                      <div style={{height: "auto", margin: "0 auto", width: "50%", marginTop: "2rem"}}>
                          <QRCode
                              size={256}
                              style={{height: "auto", maxWidth: "100%", width: "100%"}}
                              value={qrCodeValue}
                              viewBox={`0 0 256 256`}
                          />
                      </div>
                  }
              </div>

          </main>

          <Footer/>

          <style jsx>{`

              .button {
                  background-color: #ff69b4; /* Cute pink background */
                  color: white; /* White text */
                  font-size: 24px; /* Larger font size */
                  font-weight: bold; /* Bold text */
                  padding: 16px 32px; /* Bigger padding for a larger button */
                  border: none; /* Remove border */
                  border-radius: 12px; /* Rounded corners */
                  cursor: pointer; /* Change cursor to pointer */
                  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effects */
              }

              .button:active {
                  transform: scale(0.95); /* Slightly smaller when clicked */
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Dim shadow when clicked */
              }
              
              
              .container {
                  min-height: 100vh;
                  padding: 0 0.5rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }

              main {
                  padding: 5rem 0;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }

              footer {
                  width: 100%;
                  height: 100px;
                  border-top: 1px solid #eaeaea;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }

              footer img {
                  margin-left: 0.5rem;
              }

              footer a {
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }

              a {
                  color: inherit;
                  text-decoration: none;
              }

              .title a {
                  color: #0070f3;
                  text-decoration: none;
              }

              .title a:hover,
              .title a:focus,
              .title a:active {
                  text-decoration: underline;
              }

              .title {
                  margin: 0;
                  line-height: 1.15;
                  font-size: 4rem;
              }

              .title,
              .description {
                  text-align: center;
              }

              .description {
                  line-height: 1.5;
                  font-size: 1.5rem;
              }

              code {
                  background: #fafafa;
                  border-radius: 5px;
                  padding: 0.75rem;
                  font-size: 1.1rem;
                  font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                  DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
              }

              .grid {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-wrap: wrap;

                  max-width: 800px;
                  margin-top: 3rem;
              }

              .card {
                  margin: 1rem;
                  flex-basis: 45%;
                  padding: 1.5rem;
                  text-align: left;
                  color: inherit;
                  text-decoration: none;
                  border: 1px solid #eaeaea;
                  border-radius: 10px;
                  transition: color 0.15s ease, border-color 0.15s ease;
              }

              .card:hover,
              .card:focus,
              .card:active {
                  color: #0070f3;
                  border-color: #0070f3;
              }

              .card h3 {
                  margin: 0 0 1rem 0;
                  font-size: 1.5rem;
              }

              .card p {
                  margin: 0;
                  font-size: 1.25rem;
                  line-height: 1.5;
              }

              .logo {
                  height: 1em;
              }

              @media (max-width: 600px) {
                  .grid {
                      width: 100%;
                      flex-direction: column;
                  }
              }
          `}</style>

          <style jsx global>{`
              html,
              body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                  sans-serif;
              }

              * {
                  box-sizing: border-box;
              }
          `}</style>
      </div>
  )
}
