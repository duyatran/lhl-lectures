// import { useEffect, useState } from "react";

import useRequest from "../hooks/useRequest";

const Request = () => {
  const {data, loading } = useRequest("https://cat-fact.herokuapp.com/facts")

  return (
    <>
      <h2>Cat facts!</h2>
      {loading && <p>Please wait...</p>}
      {data && data.map(datum => (<p key={datum._id}>{datum.text}</p>))}
    </>
  )
}

export default Request;