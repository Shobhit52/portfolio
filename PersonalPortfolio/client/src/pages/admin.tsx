import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";

export default function Admin() {
  const { data: submissions, isLoading, error } = useQuery({
    queryKey: ["/api/contact"],
    select: (data: { success: boolean; data: ContactSubmission[] }) => data.data,
  });

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      project: "bg-blue-100 text-blue-800",
      job: "bg-green-100 text-green-800",
      collaboration: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800",
    };
    return colors[subject] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-64 mb-8"></div>
            <div className="grid gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-slate-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Error Loading Submissions
            </h1>
            <p className="text-slate-600">
              Failed to load contact submissions. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Contact Submissions
            </h1>
            <p className="text-slate-600">
              {submissions?.length || 0} total submissions
            </p>
          </div>

          {!submissions || submissions.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No submissions yet
                </h3>
                <p className="text-slate-600">
                  Contact form submissions will appear here once received.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {submission.firstName} {submission.lastName}
                            </CardTitle>
                            <p className="text-slate-600">{submission.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getSubjectColor(submission.subject)}>
                            {submission.subject}
                          </Badge>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(submission.createdAt)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}