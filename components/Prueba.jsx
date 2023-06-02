"use client";

export default function Prueba({ data }) {
  return (
    <>
      <div>ADMIN PANEL</div>
      <div className="mt-16 prompt_layout">
        {data.map((user) => (
          <div key={user._id}>
            <p>hola</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
