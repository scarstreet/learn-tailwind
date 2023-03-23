import React from "react";
export function Card({}) {
  return <div className="card">
          <h2 className="text-4xl font-semibold mb-2">Card Title</h2>
          <p className="my-3">This is a text example for the card's contents</p>
          <hr className="border-slate-300"></hr>
          <div className="mt-2 space-x-2">
            <button type="button" className="btn">hello</button>
            <button type="button" className="btn-outline">goodbye</button>
          </div>
        </div>;
}
  