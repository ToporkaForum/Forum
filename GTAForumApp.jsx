import React, { useState } from "react";

export default function GTAForumApp() {
  const [auth, setAuth] = useState({ user: null, role: null });
  const [form, setForm] = useState({ username: "", password: "" });
  const [tab, setTab] = useState("login");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (form.username === "admin") {
      setAuth({ user: form.username, role: "admin" });
    } else {
      setAuth({ user: form.username, role: "user" });
    }
  };

  const handleLogout = () => setAuth({ user: null, role: null });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">GTA SAMP Форум</h1>
      {!auth.user ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex gap-4 mb-4">
            <button onClick={() => setTab("login")} className={tab === "login" ? "font-bold" : ""}>Вход</button>
            <button onClick={() => setTab("register")} className={tab === "register" ? "font-bold" : ""}>Регистрация</button>
          </div>
          <div className="space-y-3">
            <input name="username" placeholder="Логин" className="border p-2 w-full" onChange={handleInput} />
            <input name="password" type="password" placeholder="Пароль" className="border p-2 w-full" onChange={handleInput} />
            <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
              {tab === "login" ? "Войти" : "Зарегистрироваться"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <p className="text-lg">Привет, <b>{auth.user}</b>!</p>
          <p>Роль: <b>{auth.role}</b></p>
          <div className="space-y-2">
            <button className="w-full bg-green-500 text-white p-2 rounded">Форум</button>
            <button className="w-full bg-blue-500 text-white p-2 rounded">Как начать играть</button>
            <button className="w-full bg-yellow-500 text-white p-2 rounded">Пополнить баланс</button>
            {auth.role === "admin" && <button className="w-full bg-red-500 text-white p-2 rounded">Панель админа</button>}
          </div>
          <button onClick={handleLogout} className="w-full border p-2 rounded">Выйти</button>
        </div>
      )}
    </div>
  );
}
