"use client";

import CaptureForm from "@/components/CaptureForm/CaptureForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NewTask = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("taskbot_token");
    if (!savedToken) {
      router.push("/auth");
    } else {
      setToken(savedToken);
    }
  }, [router]);
  return (
    <div>
      <CaptureForm />
    </div>
  );
};

export default NewTask;
