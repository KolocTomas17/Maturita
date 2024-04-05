export const getAllPodnikatels = async () => {
  const req = await fetch("http://localhost:3000/podnikatels", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const getPodnikatelById = async (id) => {
  const req = await fetch(`http://localhost:3000/podnikatels/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const createPodnikatel = async (fomrData) => {
  const req = await fetch(`http://localhost:3000/podnikatels`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(fomrData),
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const updatePodnikatel = async (id, fomrData) => {
  const req = await fetch(`http://localhost:3000/podnikatels/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(fomrData),
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const deletePodnikatel = async (id) => {
  const req = await fetch(`http://localhost:3000/podnikatels/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};
