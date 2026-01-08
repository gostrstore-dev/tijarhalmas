// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Show selected tab
        document.getElementById(tabName).classList.add('active');
        this.classList.add('active');
    });
});

function generateContract() {
    const dealType = document.getElementById('dealType').value;
    const language = document.getElementById('contractLanguage').value;
    const level = document.getElementById('contractLevel').value;
    
    if (!dealType) {
        alert('الرجاء اختيار نوع الصفقة');
        return;
    }
    
    // Collect form data
    const formData = {
        dealType,
        language,
        level,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
        currency: document.getElementById('currency').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        shippingResponsibility: document.getElementById('shippingResponsibility').value,
        compensationClause: document.getElementById('compensationClause').value,
        customClause: document.getElementById('customClause').value
    };
    
    // Generate contract template
    let contract = generateContractText(formData);
    
    // Display result
    document.getElementById('contractOutput').style.display = 'block';
    document.getElementById('contractContent').textContent = contract;
    
    // Scroll to result
    document.getElementById('contractOutput').scrollIntoView({ behavior: 'smooth' });
}

function generateContractText(data) {
    let contract = '';
    
    if (data.language === 'arabic') {
        contract = `
عقد توريد وشراء
═════════════════════════════════════════

بناءً على هذا العقد المبرم بين:
المورد: [اسم المورد / اسم الشركة]
العنوان: [عنوان المورد]
الرقم التجاري: [الرقم التجاري]

والمشتري: [اسمك / اسم شركتك]
العنوان: [عنوانك]
الرقم التجاري: [رقمك التجاري]

═════════════════════════════════════════

البنود:

1️⃣ تفاصيل المنتج:
   - نوع المنتج: [أكمل]
   - الكمية: ${data.quantity || '[أكمل]'} وحدة
   - السعر: ${data.price || '[أكمل]'} ${data.currency || 'USD'} لكل وحدة
   - الإجمالي: [حساب تلقائي]

2️⃣ شروط الدفع:
   - طريقة الدفع: [حدد]
   - التاريخ المتفق عليه: [حدد]

3️⃣ شروط التسليم:
   - المدة: ${data.deliveryTime || '[أكمل]'}
   - مسؤول الشحن: ${data.shippingResponsibility || 'حسب الاتفاق'}
   - نقطة التسليم: [حدد]

4️⃣ جودة المنتج:
   - يتعهد المورد بتسليم منتجات بجودة المعايير الدولية
   - في حالة عدم المطابقة: يحق للمشتري الرفض أو الاسترجاع
   - مدة الضمان: 6 أشهر على الأقل

5️⃣ شروط التأخير:
   ⚠️ إذا تأخر المورد عن التسليم:
   - يحق للمشتري فسخ العقد دون غرامة
   - يُستحق غرامة تأخير: [نسبة مئوية]% يوميًا

6️⃣ شروط العيوب والأضرار:
   - إذا وجد المشتري عيوبًا في المنتج
   - يحق له إعادة المنتج على حساب المورد
   - أو الحصول على تعويض مالي

7️⃣ شروط الإلغاء:
   - للمشتري حق إلغاء الطلب قبل 7 أيام من التسليم
   - مع استرجاع 90% من المبلغ

8️⃣ النزاعات والحل:
   - أي نزاع سيتم حله بالتفاوض الودي
   - أو عن طريق [محكمة / تحكيم] في [المدينة]

تم التوقيع بالاتفاق:

بيانات المورد:
الاسم: ____________________
التوقيع: ____________________
التاريخ: ____________________

بيانات المشتري:
الاسم: ____________________
التوقيع: ____________________
التاريخ: ____________________
        `;
    } else {
        contract = `
PURCHASE AND SUPPLY AGREEMENT
═════════════════════════════════════════

Supplier: [Supplier Name/Company]
Address: [Supplier Address]
Commercial Registration: [Commercial Number]

Buyer: [Your Name/Company]
Address: [Your Address]
Commercial Registration: [Your Registration]

═════════════════════════════════════════

TERMS AND CONDITIONS:

1️⃣ Product Details:
   - Product Type: [Complete]
   - Quantity: ${data.quantity || '[Complete]'} Units
   - Unit Price: ${data.price || '[Complete]'} ${data.currency || 'USD'}
   - Total: [Auto-calculated]

2️⃣ Payment Terms:
   - Payment Method: [Specify]
   - Payment Date: [Specify]

3️⃣ Delivery Terms:
   - Delivery Period: ${data.deliveryTime || '[Complete]'}
   - Shipping Responsibility: ${data.shippingResponsibility || 'As Agreed'}
   - Delivery Point: [Specify]

4️⃣ Product Quality:
   - Supplier guarantees international standard quality
   - Non-compliant products may be rejected or returned
   - Warranty Period: Minimum 6 months

5️⃣ Late Delivery Clause:
   ⚠️ If supplier fails to deliver on time:
   - Buyer has the right to cancel without penalty
   - Late delivery fee: [Percentage]% daily

6️⃣ Defects and Damages:
   - If defects are found, buyer may return product
   - Or request financial compensation
   - Supplier bears return shipping costs

7️⃣ Cancellation Terms:
   - Buyer may cancel within 7 days of delivery notification
   - 90% refund applies

8️⃣ Dispute Resolution:
   - Disputes will be resolved through negotiation
   - Or arbitration in [City]

SIGNATURES:

Supplier:
Name: ____________________
Signature: ____________________
Date: ____________________

Buyer:
Name: ____________________
Signature: ____________________
Date: ____________________
        `;
    }
    
    return contract;
}

function analyzeContract() {
    const contractText = document.getElementById('contractText').value;
    
    if (!contractText) {
        alert('الرجاء إدراج نص العقد');
        return;
    }
    
    // Simulate analysis (في التطبيق الفعلي ستحتاج API)
    const analysis = {
        dangerous: [
            { title: 'عدم وجود حد زمني للتسليم', text: 'هذا خطر جدًا! يمكن للمورد التأخير بلا حد' },
            { title: 'لا توجد شروط ضمان', text: 'أنت لا تملك حماية ضد المنتجات المعيبة' }
        ],
        warnings: [
            { title: 'شروط دفع غير واضحة', text: 'يحتاج تفاوض على طريقة الدفع' },
            { title: 'غرامة تأخير منخفضة جدًا', text: 'اطلب زيادة نسبة الغرامة' }
        ],
        safe: [
            { title: 'بند واضح للكمية والسعر', text: 'هذا آمن ✓' },
            { title: 'حقك في الإرجاع', text: 'شرط جيد وآمن ✓' }
        ]
    };
    
    let html = '';
    
    if (analysis.dangerous.length > 0) {
        html += '<div class="analysis-section"><h4>🔴 بنود خطرة:</h4>';
        analysis.dangerous.forEach(item => {
            html += `<div class="clause-danger">
                <div class="clause-title">${item.title}</div>
                <div class="clause-text">${item.text}</div>
            </div>`;
        });
        html += '</div>';
    }
    
    if (analysis.warnings.length > 0) {
        html += '<div class="analysis-section"><h4>🟡 بنود تحتاج تفاوض:</h4>';
        analysis.warnings.forEach(item => {
            html += `<div class="clause-warning">
                <div class="clause-title">${item.title}</div>
                <div class="clause-text">${item.text}</div>
            </div>`;
        });
        html += '</div>';
    }
    
    if (analysis.safe.length > 0) {
        html += '<div class="analysis-section"><h4>🟢 بنود آمنة:</h4>';
        analysis.safe.forEach(item => {
            html += `<div class="clause-safe">
                <div class="clause-title">${item.title}</div>
                <div class="clause-text">${item.text}</div>
            </div>`;
        });
        html += '</div>';
    }
    
    document.getElementById('analysisResult').style.display = 'block';
    document.getElementById('dangerousClauses').innerHTML = html;
}

function loadTemplate(templateName) {
    // ستقوم بتحميل قالب محدد
    console.log('Loading template:', templateName);
    document.getElementById('contractOutput').style.display = 'block';
    document.getElementById('contractContent').textContent = 'القالب قيد التحميل...';
}

function downloadPDF() {
    alert('سيتم تحميل العقد كـ PDF قريبًا');
}

function copyToClipboard() {
    const content = document.getElementById('contractContent').textContent;
    navigator.clipboard.writeText(content);
    alert('تم نسخ العقد!');
}

function emailContract() {
    alert('سيتم فتح بريدك الإلكتروني لإرسال العقد');
}
