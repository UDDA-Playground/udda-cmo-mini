
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import NonHomeLayout from '@/components/NonHomeLayout';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
    console.log(values);
  };

  return (
    <NonHomeLayout>
      <div className="container max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-udda-text">Get in Touch</h1>
          <p className="text-lg text-udda-lightGray max-w-2xl mx-auto">
            Have questions about our marketing strategy services? 
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Address Information */}
          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-udda-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Office</h3>
                  <address className="not-italic text-udda-lightGray leading-relaxed">
                    UDDA TRANSLATION AB<br />
                    Stockholm, Sweden
                  </address>
                </div>
              </div>
            </div>
            <div className="bg-udda-primary/5 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3 text-udda-primary">Our Hours</h3>
              <div className="space-y-2 text-udda-lightGray">
                <p>On-demand when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default Contact;
