# Deployment & Hosting Guide: GreenVolt Energy Solutions

This guide outlines the steps to take your Next.js website live on **www.greenvoltes.in** using **Vercel** (the industry standard for Next.js) and your **GoDaddy** domain.

---

## 🚀 Phase 1: Push Code to GitHub
Vercel works best with a private or public GitHub repository. This also handles your future updates automatically.

1.  **Create a GitHub Account**: Go to [github.com](https://github.com/) (if you don't have one).
2.  **Create a New Repository**: Name it `greenvoltes`.
3.  **Push Your Code**:
    Open your terminal in the `greenvoltes` folder and run:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/greenvoltes.git
    git branch -M main
    git push -u origin main
    ```

---

## 🌍 Phase 2: Deploy to Vercel
Vercel is free for hobby/small business use and offers the best performance for Next.js.

1.  **Sign Up at Vercel**: Go to [vercel.com](https://vercel.com/signup) and select **Continue with GitHub**.
2.  **Import Project**: Click "**Add New...**" -> "**Project**" and select your `greenvoltes` repository.
3.  **Deploy**: Click "**Deploy**". Vercel will build your site and give you a temporary link (e.g., `greenvoltes-abc.vercel.app`).

---

## 🔗 Phase 3: Connect GoDaddy Domain (www.greenvoltes.in)
Now, tell Vercel to use your purchased domain.

1.  **Add Domain in Vercel**:
    *   In your Vercel project dashboard, go to **Settings** -> **Domains**.
    *   Type `greenvoltes.in` and click **Add**.
    *   Vercel will ask if you want to add `www.greenvoltes.in` as well—select **Yes**.
2.  **Configure DNS in GoDaddy**:
    Vercel will give you two records to add to your GoDaddy DNS settings:
    *   **A Record**: Set `@` to the IP address Vercel provides (usually `76.76.21.21`).
    *   **CNAME Record**: Set `www` to `cname.vercel-dns.com`.
3.  **Wait for Propagation**: It usually takes 10-20 minutes for the domain to start working. Vercel will automatically provide an **SSL (HTTPS) certificate** for free.

---

## 🔄 Phase 4: How to Update in the Future
Updating your site is incredibly easy. You don't need to manually upload anything ever again.

1.  **Make Changes**: Edit your code as we have been doing.
2.  **Commit & Push**:
    ```bash
    git add .
    git commit -m "Updated contact section"
    git push origin main
    ```
3.  **Auto-Deploy**: Vercel will notice the "push" and **automatically re-deploy** your live site. Within 1-2 minutes, `www.greenvoltes.in` will show the new version.

---

## ✅ Recommendation
I have already initialized **Git** in your local folder and prepared your code for its first commit. Your site is ready for the "Push to GitHub" step.

Would you like me to help you verify anything else before you start the deployment process?
