import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/icons/violo_logo.png";

const Privacy: React.FC = () => {
  const navigate = useNavigate();
  const [privacyOption, setPrivacyOption] = useState<"none" | "link" | "text">(
    "none",
  );
  const [link, setLink] = useState("");
  const [policyText, setPolicyText] = useState("");

  const handleSave = () => {
    console.log({ privacyOption, link, policyText });
    navigate("/dashboard");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white bg-dot-pattern flex flex-col">
      <header className="border-b border-gray-200 px-4 py-4 md:px-8 md:py-6 bg-white z-50">
        <div className="max-w-5xl mx-auto">
          <img src={logo} alt="Violo" className="h-8" />
        </div>
      </header>

      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Privacy</h2>
          <p className="text-gray-600">
            violo is committed to assisting you in your efforts to comply with
            the EU General Data Processing Regulation (GDPR). According to GDPR,
            when processing job applications from EU citizens on your behalf,
            violo will be the 'Data Processor' and your organisation will be the
            'Data Controller'.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 md:p-8 space-y-6">
            <h3 className="font-medium text-gray-900">Privacy policy</h3>
            <p className="text-gray-600 text-sm">
              Make your recruitment privacy policy available to your job
              candidates prior to them starting their application. You can set
              this now or later from your profile page.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="none"
                  name="privacy"
                  value="none"
                  checked={privacyOption === "none"}
                  onChange={() => setPrivacyOption("none")}
                  className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
                />
                <Label
                  htmlFor="none"
                  className="font-normal text-gray-900 cursor-pointer"
                >
                  None
                </Label>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="link"
                    name="privacy"
                    value="link"
                    checked={privacyOption === "link"}
                    onChange={() => setPrivacyOption("link")}
                    className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
                  />
                  <Label
                    htmlFor="link"
                    className="font-normal text-gray-900 cursor-pointer"
                  >
                    Link to web page
                  </Label>
                </div>
                {privacyOption === "link" && (
                  <div className="pl-8">
                    <Input
                      placeholder="https://example.com/privacy"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="text"
                    name="privacy"
                    value="text"
                    checked={privacyOption === "text"}
                    onChange={() => setPrivacyOption("text")}
                    className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
                  />
                  <Label
                    htmlFor="text"
                    className="font-normal text-gray-900 cursor-pointer"
                  >
                    Policy text
                  </Label>
                </div>
                {privacyOption === "text" && (
                  <div className="pl-8">
                    <Textarea
                      placeholder="Enter your privacy policy text here..."
                      value={policyText}
                      onChange={(e) => setPolicyText(e.target.value)}
                      className="bg-white min-h-[150px]"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col-reverse sm:flex-row gap-4">
            <Button
              variant="outline"
              onClick={handleSkip}
              className="w-full sm:w-auto"
            >
              Skip
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 w-full sm:w-auto"
              onClick={handleSave}
            >
              Save & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
