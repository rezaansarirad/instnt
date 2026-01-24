import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { profileSchema, type ProfileSchema } from '../../schemas/profile';

const Onboarding: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";
  const firstNameFromState = location.state?.firstName || "";
  const lastNameFromState = location.state?.lastName || "";
  
  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: firstNameFromState,
      lastName: lastNameFromState,
      email: emailFromState,
      company: "",
      phoneNumber: "",
      language: "English",
    },
    mode: "onChange"
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (values: ProfileSchema) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Onboarding submitted', values);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
        navigate('/create-job');
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Completed!</h2>
          <p className="text-gray-500">Your information has been successfully saved.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white bg-dot-pattern">
      
      <header className="border-b border-gray-200 px-4 py-4 md:px-8 md:py-6">
         <div className="max-w-5xl mx-auto">
            <span className="text-2xl font-bold text-primary font-mono tracking-tight">violo</span>
         </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 md:px-8 md:py-10">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">Welcome to violo</h1>
          <p className="text-gray-500 text-base md:text-lg">Complete your profile to get started.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">First name (required)</FormLabel>
                  <div className="w-full md:col-span-9">
                    <FormControl>
                      <Input placeholder="John" {...field} className="h-12 text-base border-gray-200" />
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">Last name (required)</FormLabel>
                  <div className="w-full md:col-span-9">
                    <FormControl>
                      <Input placeholder="Doe" {...field} className="h-12 text-base border-gray-200" />
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">Email address</FormLabel>
                  <div className="w-full md:col-span-9">
                    <FormControl>
                      <Input {...field} disabled className="h-12 text-base border-gray-200 bg-gray-200 text-gray-600 cursor-not-allowed" />
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">Company (required)</FormLabel>
                  <div className="w-full md:col-span-9">
                    <FormControl>
                      <Input placeholder="Company Name" {...field} className="h-12 text-base border-gray-200" />
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">Phone number</FormLabel>
                  <div className="w-full md:col-span-9">
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} className="h-12 text-base border-gray-200" />
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 space-y-0">
                  <FormLabel className="text-gray-600 font-normal text-base md:col-span-3">Language (required)</FormLabel>
                  <div className="w-full relative md:col-span-9">
                    <FormControl>
                      <select
                        className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                        {...field}
                      >
                         <option value="English">English</option>
                         <option value="Spanish">Spanish</option>
                         <option value="French">French</option>
                      </select>
                    </FormControl>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                       <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <div className="mt-8 flex justify-center">
               <Button type="submit" disabled={isSubmitting} className="w-full md:w-[200px] h-12 text-base font-medium rounded-md">
                 {isSubmitting ? "Saving..." : "Save and continue"}
               </Button>
            </div>

          </form>
        </Form>
      </main>
    </div>
  );
};

export default Onboarding;
