export const getAllCats = async () => {
  const req = await fetch("http://localhost:3000/cats", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
};

export const getCatById = async (id) => {
  const req = await fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
};

export const createCat = async (fomrData) => {
  const req = await fetch(`http://localhost:3000/cats`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(fomrData),
  });
  const data = await req.json();
};

export const updateCat = async (id, fomrData) => {
  const req = await fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(fomrData),
  });
  const data = await req.json();
};

export const deleteCat = async (id) => {
  const req = await fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
};
