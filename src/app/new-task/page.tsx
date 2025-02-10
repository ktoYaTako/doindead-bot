"use client";

import CaptureForm from "@/components/CaptureForm/CaptureForm";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NewTask = () => {
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem("taskbot_token");
    if (!savedToken) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <div>
      <CaptureForm />
    </div>
  );
};

export default NewTask;
