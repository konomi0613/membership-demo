"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export type ActionResult = {
    status: "success" | "error" | "";
    message: string;
    formData?: Record<string, string>
}

export async function createContactData(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
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
            message: "お名前を入力してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // メールアドレス
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "有効なメールアドレスを入力してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // お問い合わせ種別
    const validCategories = ['course', 'technical', 'billing', 'account', 'other'];
    if (!rawFormData.category || !validCategories.includes(rawFormData.category)) {
        return {
            status: "error",
            message: "種別を選択してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // 件名
    if (!rawFormData.subject || rawFormData.subject.trim() === '') {
        return {
            status: "error",
            message: "件名を入力してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // お問い合わせ内容
    if (!rawFormData.message || rawFormData.message.trim() === '') {
        return {
            status: "error",
            message: "内容を入力してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // プライバシーポリシー
    if (!rawFormData.privacy) {
        return {
            status: "error",
            message: "プライバシーポリシーに同意してください",
            formData: Object.fromEntries(formData) as Record<string, string>
        }
    }

    // TODO: 送信先サービスを設定する

    return {
        status: "success",
        message: "送信しました"
    };
}