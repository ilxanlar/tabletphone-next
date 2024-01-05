import FormSubmitButton from "../FormSubmitButton";
async function addComment(formData: FormData) {
  const name = formData.get("name")?.toString;
  const content = formData.get("content")?.toString;
  const email = formData.get("email")?.toString;
  if (!name || !content || !email) {
    throw Error("فیلد های ستاره دار الزامی می باشد.");
  }
}

export default function CommentForm(): React.ReactNode {
  return <div >
    <form action={addComment}>
      <h1>دیدگاهتان را بنوسید</h1>
      <p>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند </p>
      <textarea required name="content" />

      <input
        required
        name="name"
        placeholder="نام"
        className="input-bordered input mb-3 w-full"
      />
      <input
        required
        name="email"
        type="email"
        placeholder="ایمیل"
        className="input-bordered input mb-3 w-full"
      />
      <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>    </form>
  </div>;
}
