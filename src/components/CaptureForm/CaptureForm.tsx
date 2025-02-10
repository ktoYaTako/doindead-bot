"use client";

import React from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import FormFields from "../FormFields/FormFields";
import ITask from "@/shared/types/task.interface";

const CaptureForm = () => {
  const form = useForm<ITask>();
  const token = localStorage.getItem("taskbot_token") || "";

  const onSubmit = async (data: any) => {
    const queryString = new URLSearchParams({
      token,
      title: encodeURIComponent(data.title),
      description: encodeURIComponent(data.description),
      tags: encodeURIComponent(data.tags),
      budget_from: data.budget_from.toString(),
      budget_to: data.budget_to.toString(),
      deadline: data.deadline_days.toString(),
      reminds: data.number_of_reminders.toString(),
      all_auto_responses: "false",
      rules: JSON.stringify({
        budget_from: Number(data.budget_from),
        budget_to: Number(data.budget_to),
        deadline_days: Number(data.deadline_days),
        qty_freelancers: 1,
      }),
    }).toString();

    const url = `/api/proxy?${queryString}`;

    try {
      const response = await fetch(url, { method: "GET" });

      if (response.status === 200) {
        alert("Задача опубликована!");
        form.reset();
      } else {
        alert("Ошибка при публикации задачи!");
      }
    } catch (error) {
      alert("Ошибка при отправке запроса!");
    }
  };

  return (
    <div>
      <h1>Capture Form</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 max-w-lg mx-auto"
        >
          <FormFields form={form} />
          <button type="submit" className="btn-primary">
            Отправить
          </button>
        </form>
      </Form>
    </div>
  );
};

export default CaptureForm;
