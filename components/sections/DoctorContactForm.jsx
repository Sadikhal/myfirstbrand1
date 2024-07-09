
'use client';

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { servicesDetails } from "@/lib/serviceDetails";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const initValues = { fullName: "" ,email: "", mobile: "", company: "", service: [] ,budget:[]};

const initState = { isLoading: false, error: "", values: initValues };


const DoctorContactForm = () => {


  const { toast } = useToast()

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleCheckboxChange = (name, isChecked) => {
    const newCheckboxValues = isChecked
      ? [...values.service, name]
      : values.service.filter((item) => item !== name);

    handleChange({ target: { name: "service", value: newCheckboxValues } });
  };
  const handleCheckboxBudget = (name, isChecked) => {
    const newCheckboxValues = isChecked
      ? [...values.budget, name]
      : values.service.filter((item) => item !== name);

    handleChange({ target: { name: "budget", value: newCheckboxValues } });
  };

  const onSubmit = async (e) => {
    if (!values.fullName || !values.email || !values.mobile || !values.company ) {
     ;
      toast({
        variant: "destructive",
        description: "Please complete all required fields.",
      })
      return;
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // send email
    try {
      const response = await fetch("api/doctor-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const { success, error } = await response.json();

      if (success) {
        toast({
          variant: "primary",
          title: "Your message has been sent.",
          description: "Thank you for your enquiry, we will contact soon",
         
        })
        setState(initState);
      } else if (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      alert("something went wrong, please check your connection"); // Corrected concatenation
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="space-y-8 w-full leading-[20px] font-raleway font-medium text-[15px] pt-9">
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <div className="flex flex-col gap-4 w-full">
        <FormControl isRequired isInvalid={touched.fullName && !values.fullName}>
          <FormLabel className="text-foreground">Full Name</FormLabel>
          <Input
            className="rounded-2xl border w-full py-[10px] bg-foreground mt-2 text-slate-900 px-3"
            disabled={isLoading}
            type="text"
            name="fullName"
            errorBorderColor="red.300"
            value={values.fullName}
            onChange={handleChange}
            onBlur={onBlur}
            required
          />
          <FormErrorMessage className="text-red-800">Please complete this required field. </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
          <FormLabel className="text-foreground">Email</FormLabel>
          <Input
            className="rounded-2xl border bg-foreground text-slate-900 w-full py-[10px] px-3 mt-2"
            disabled={isLoading}
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            required
          />
          <FormErrorMessage className="text-red-800">Please complete this required field. </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.mobile && !values.mobile} mb={5}>
          <FormLabel className="text-foreground">Mobile Number</FormLabel>
          <Input
            className="rounded-2xl border bg-foreground text-slate-900 w-full py-[10px] px-3 mt-2"
            disabled={isLoading}
            type="tel"
            pattern="[0-9]{10}"
            name="mobile"
            errorBorderColor="red.300"
            value={values.mobile}
            onChange={handleChange}
            onBlur={onBlur}
            required
            maxLength={10}
           
          />
          <FormErrorMessage className="text-red-800">Please complete this required field. </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.company && !values.company} mb={5}>
          <FormLabel className="text-foreground">Hospital / Clinic Name</FormLabel>
          <Input
            className="rounded-2xl border bg-foreground text-slate-900 w-full py-[10px] mt-2 px-3"
            disabled={isLoading}
            type="text"
            name="company"
            errorBorderColor="red.300"
            value={values.company}
            onChange={handleChange}
            onBlur={onBlur}
            required
          />
          <FormErrorMessage className="text-red-800">Please complete this required field. </FormErrorMessage>
        </FormControl>
        <div className="text-left pt-2">
        <Button 
        className="bg-[#FC8D00] text-foreground px-8 py-3 rounded-lg hover:bg-slate-100 opacity-100 hover:text-black"
          isLoading={isLoading}
          // disabled={!values.fullName || !values.email || !values.company || !values.mobile}
          onClick={onSubmit}
        >
          Submit
        </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorContactForm;
