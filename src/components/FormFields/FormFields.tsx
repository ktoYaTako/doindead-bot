import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import ITask from "@/shared/types/task.interface";

interface IFormFieldProps {
  form: UseFormReturn<ITask, any, undefined>;
}

const FormFields = ({ form }: IFormFieldProps) => {
  const { errors } = form.formState;
  return (
    <>
      <FormField
        name="title"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="title">Заголовок</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите заголовок"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>{errors.title && "Заголовок обязателен"}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="description"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="description">Описание</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите описание"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>
              {errors.description && "Описание обязательно"}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="tags"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="tags">Теги</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите теги"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>{errors.tags && "Теги обязательны"}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="budget_from"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="budget_from">Бюджет от</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите минимальный бюджет"
                type="number"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>
              {errors.budget_from && "Бюджет обязателен"}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="budget_to"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="budget_to">Бюджет до</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите максимальный бюджет"
                type="number"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>{errors.budget_to && "Бюджет обязателен"}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="deadline_days"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="deadline_days">Дней до дедлайна</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Введите количество дней"
                type="number"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>
              {errors.deadline_days && "Количество дней обязательно"}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="number_of_reminders"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="number_of_reminders">Напоминания</Label>
            <FormControl>
              <Input
                {...field}
                placeholder="Количество напоминаний"
                type="number"
                required
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage>
              {errors.number_of_reminders &&
                "Количество напоминаний обязательно"}
            </FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormFields;
