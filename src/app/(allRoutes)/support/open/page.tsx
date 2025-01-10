import { createSupportRequest } from "@/lib/serverActions/dataMutatationActions";
import Form from "next/form";

export default function OpenPage() {
  return (
    <div className="bg-white border-2 border-primary-dark shadow-md rounded-md p-8 space-y-4">
      <h2 className="text-2xl font-semibold text-primary-dark">Create new Support Request</h2>
      <Form action={createSupportRequest} className="support-form space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <fieldset>
            <label>
              <span>Name</span>
              <input type="text" name="name" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <span>Email</span>
              <input type="email" name="email" />
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label>
            <span>Subject</span>
            <input type="text" name="subject" />
          </label>
        </fieldset>
        <div className="grid grid-cols-3 gap-4">
          <fieldset>
            <label>
              <span>Department</span>
              <select name="department">
                <option>--department--</option>
                <option value={"general"}>General Query</option>
                <option value={"technical"}>Technical Support</option>
                <option value="companyComplaint">Company Complaint</option>
                <option value={"billing"}>Billing</option>
                <option value={"other"}>Other</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <span>Related Service</span>
              <select name="service">
                <option>--service--</option>
                <option value="product">Product</option>
                <option value="service">Service</option>
                <option value="customization">Customization</option>
                <option value="other">Other</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <span>Priority</span>
              <select name="priority">
                <option>--priority--</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label>
            <span>Description</span>
            <textarea name="description" rows={10} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Attachment</span>
            <input type="file" name="attachment" multiple className="file:absolute file:right-0 file:border-primary-dark file:bg-primary-light focus:file:outline-none file:rounded-full file:px-4 file:py-1 file:text-primary-dark file:font-semibold file:top-1/2 file:-translate-y-1/2 active:file:scale-95 relative" />
          </label>
        </fieldset>
        <div className="flex justify-center gap-4">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </div>
  );
}
