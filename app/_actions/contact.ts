"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

type ActionResult = {
    status: "success" | "error";
    message: string;
}

export async function createContactData(_prevState: any, formData: FormData): Promise<ActionResult> {
    const rawFormData = {
        name: formData.get("contact-name") as string,
        email: formData.get("contact-email") as string,
        category: formData.get("contact-category") as string,
        subject: formData.get("contact-subject") as string,
        message: formData.get("contact-message") as string,
        privacy: formData.get("contact-privacy") as string,
    }

    // お名前
    if (!rawFormData.name || rawFormData.name.trim() === '') {
        return {
            status: "error",
            message: "お名前を入力してください"
        }
    }

    // メールアドレス
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください"
        }
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "有効なメールアドレスを入力してください"
        }
    }

    // お問い合わせ種別
    const validCategories = ['course', 'technical', 'billing', 'account', 'other'];
    if (!rawFormData.category || !validCategories.includes(rawFormData.category)) {
        return {
            status: "error",
            message: "種別を選択してください"
        }
    }

    // 件名
    if (!rawFormData.subject || rawFormData.subject.trim() === '') {
        return {
            status: "error",
            message: "件名を入力してください"
        }
    }

    // お問い合わせ内容
    if (!rawFormData.message || rawFormData.message.trim() === '') {
        return {
            status: "error",
            message: "内容を入力してください"
        }
    }

    // プライバシーポリシー
    if (!rawFormData.privacy) {
        return {
            status: "error",
            message: "プライバシーポリシーに同意してください"
        }
    }

    // ここで実際の送信処理（メール送信、DB保存など）
    
    return { 
        status: "success", 
        message: "OK" 
    };
}