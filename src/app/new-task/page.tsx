"use client";

import CaptureForm from "@/components/CaptureForm/CaptureForm";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const NewTask = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem("taskbot_token");
    if (savedToken) {
      setToken(savedToken);
    } else {
      router.push("/auth");
    }
  }, [router]);

  if (token === null) {
    return null;
  }

  return (
    <div>
      <CaptureForm />
    </div>
  );
};

export default NewTask;
