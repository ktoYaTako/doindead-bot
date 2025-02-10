"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function AuthPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask?token=${token}`
      );

      if (response.status === 200 || response.status === 422) {
        localStorage.setItem("taskbot_token", token);
        router.push("/new-task");
      } else {
        setError("Неверный токен. Попробуйте еще раз.");
      }
    } catch {
      setError("Ошибка при проверке токена.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Введите токен</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Токен"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Войти
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
