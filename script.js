// Placeholder for JavaScript functionality
// Add interactivity for the merchant platform here

console.log('المنصة جاهزة للعمل');

// ============ Scroll To Tools ============
function scrollToTools() {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}

// ============ Dynamic Effects ============
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-item, .step, .stat').forEach(el => {
        observer.observe(el);
    });

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            heroContent.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }
});

// ============ Tab Switching ============
document.querySelectorAll('.tool-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const toolName = this.getAttribute('data-tool');
        
        document.querySelectorAll('.tool-content').forEach(content => {
            content.classList.remove('active');
        });
        
        document.querySelectorAll('.tool-tab-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        document.getElementById(toolName + '-tool').classList.add('active');
        this.classList.add('active');
        
        setTimeout(() => {
            document.querySelector('.tool-content.active').scrollIntoView({ 
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 100);
    });
});

// ============ Currencies Configuration ============
const currencies = {
    'USD': { symbol: '$', name: 'دولار أمريكي' },
    'EUR': { symbol: '€', name: 'يورو' },
    'GBP': { symbol: '£', name: 'جنيه إسترليني' },
    'SAR': { symbol: '﷼', name: 'ريال سعودي' },
    'AED': { symbol: 'د.إ', name: 'درهم إماراتي' },
    'KWD': { symbol: 'د.ك', name: 'دينار كويتي' },
    'QAR': { symbol: 'ر.ق', name: 'ريال قطري' },
    'BHD': { symbol: 'د.ب', name: 'دينار بحريني' },
    'JPY': { symbol: '¥', name: 'ين ياباني' },
    'CNY': { symbol: '¥', name: 'يوان صيني' }
};

// ============ Ali Baba Messages Generator - Enhanced ============
function generateAlibabaMessage() {
    const msgType = document.getElementById('msgType').value;
    const language = document.getElementById('msgLanguage').value;
    const productDetails = document.getElementById('productDetails').value;
    const companyName = document.getElementById('companyName')?.value || '';
    const budget = document.getElementById('budgetRange')?.value || '';

    if (!msgType || !productDetails) {
        showNotification('الرجاء ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    let message = '';

    if (language === 'arabic') {
        const templates = {
            inquiry: `السلام عليكم ورحمة الله وبركاته،

أنا أمثل شركة ${companyName || 'متخصصة في الاستيراد'}

أبحث عن: ${productDetails}

أود معرفة التفاصيل التالية:
✓ ما هو سعرك لكل وحدة؟
✓ هل يتوفر عينة مجانية أو برسوم؟
✓ ما أقل كمية للطلب (MOQ)؟
✓ كم المدة المتوقعة للتسليم؟
✓ هل تقدمون خدمات التخزين المؤقت؟
✓ ما طرق الدفع المتاحة؟

أتطلع للتعاون معك قريباً.

مع أطيب التحيات`,

            negotiate: `السلام عليكم،

شكراً على عرضك السعري لـ: ${productDetails}

بصراحة، السعر الذي تقدمه أعلى من متوسط السوق بحوالي 20-30%.

معلومات إضافية عني:
• أنا عميل طويل الأمد أبحث عن شراكة مستقرة
• الميزانية المتوفرة: ${budget || 'ألف دولار'}
• أريد طلبات منتظمة شهرية

هل يمكنك تقديم سعر أفضل؟ يمكننا أيضاً التفاوض على شروط الدفع.`,

            sample: `مرحباً،

أود طلب عينة من: ${productDetails}

معلومات العينة المطلوبة:
- الكمية: 10 وحدات على الأقل
- المواصفات: [سيتم تحديدها]
- الجودة: معايير أوروبية على الأقل

أسئلتي:
✓ كم سعر العينة؟
✓ هل تتحملون جزء من تكاليف الشحن؟
✓ كم وقت التسليم؟
✓ هل يمكن تطبيق سعر العينة على الطلب الأساسي؟`,

            bulk: `السلام عليكم ورحمة الله وبركاته،

أنا أبحث عن موردين موثوقين لـ: ${productDetails}

طلبي:
• الكمية: ${budget || '500+'} وحدة
• الدفع: شهري أو حسب الاتفاق
• الجودة: معايير دولية معتمدة

ما أتوقعه منك:
1. أفضل سعر بالجملة
2. شروط دفع مرنة للطلبات المستمرة
3. ضمان الجودة والالتزام بالمواعيد
4. دعم فني وخدمة ما بعد البيع

هل أنت جاهز للشراكة؟`
        };
        message = templates[msgType] || 'خطأ في نوع الرسالة';
    } else {
        const templates = {
            inquiry: `Hello,

I represent ${companyName || 'an import-focused company'}

I'm interested in: ${productDetails}

I would like to know:
✓ What is your unit price?
✓ Is a free sample available?
✓ What is your MOQ (Minimum Order Quantity)?
✓ What is the expected delivery time?
✓ Do you offer temporary storage services?
✓ What payment methods do you accept?

I look forward to working with you.

Best regards`,

            negotiate: `Hi,

Thank you for your quote on: ${productDetails}

Honestly, your price is 20-30% above market average.

About me:
• I'm looking for a long-term partnership
• Available budget: ${budget || '$1000'}
• I need monthly consistent orders

Can you offer a better price? We can also negotiate payment terms.`,

            sample: `Hello,

I would like to order a sample of: ${productDetails}

Sample Details:
- Quantity: At least 10 units
- Specifications: [To be specified]
- Quality: At least European standards

My questions:
✓ What is the sample price?
✓ Do you cover part of shipping costs?
✓ What is the delivery time?
✓ Can we apply the sample price to the bulk order?`,

            bulk: `Hello,

I'm looking for reliable suppliers for: ${productDetails}

My requirements:
• Quantity: ${budget || '500+'} units
• Payment: Monthly or negotiable
• Quality: International certified standards

What I expect:
1. Best wholesale price
2. Flexible payment terms for continuous orders
3. Quality guarantee and delivery commitment
4. Technical support and after-sales service

Are you ready for partnership?`
        };
        message = templates[msgType] || 'Error in message type';
    }

    displayResult('alibabaResult', message, 'alibabaOutput');
}

// ============ Pricing Calculator - Enhanced with Currencies ============
function calculatePricing() {
    const costPrice = parseFloat(document.getElementById('costPrice').value) || 0;
    const shippingCost = parseFloat(document.getElementById('shippingCost').value) || 0;
    const additionalCost = parseFloat(document.getElementById('additionalCost').value) || 0;
    const marginPercentage = parseFloat(document.getElementById('marginPercentage').value) || 50;
    const currency = document.getElementById('currency').value || 'USD';
    const currencySymbol = currencies[currency]?.symbol || '$';
    const currencyName = currencies[currency]?.name || 'دولار أمريكي';

    if (costPrice === 0) {
        showNotification('الرجاء إدخال تكلفة الشراء', 'error');
        return;
    }

    const totalCost = costPrice + shippingCost + additionalCost;
    const profit = (totalCost * marginPercentage) / 100;
    const sellingPrice = totalCost + profit;
    const profitMargin = ((profit / sellingPrice) * 100).toFixed(2);

    const breakdown = `
التفصيل الكامل للتسعير
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
العملة: ${currencyName}

المكونات:
  تكلفة الشراء:     ${costPrice.toFixed(2)} ${currencySymbol}
  تكاليف الشحن:     ${shippingCost.toFixed(2)} ${currencySymbol}
  تكاليف إضافية:    ${additionalCost.toFixed(2)} ${currencySymbol}

النتائج:
  ────────────────────────────────
  إجمالي التكاليف:   ${totalCost.toFixed(2)} ${currencySymbol}
  نسبة الهامش:       ${marginPercentage}%
  الربح المتوقع:     ${profit.toFixed(2)} ${currencySymbol}
  ────────────────────────────────
  🎯 السعر النهائي:  ${sellingPrice.toFixed(2)} ${currencySymbol}
  
التحليل:
  نسبة الربح من السعر: ${profitMargin}%
  تكلفة الوحدة:      ${totalCost.toFixed(2)} ${currencySymbol}
  هامش الأمان:       ${profit.toFixed(2)} ${currencySymbol}
    `;

    const outputSection = document.getElementById('pricingOutput');
    outputSection.innerHTML = `
        <h4>النتائج:</h4>
        <div class="pricing-results">
            <div class="result-item">
                <span>إجمالي التكاليف:</span>
                <strong>${totalCost.toFixed(2)} ${currencySymbol}</strong>
            </div>
            <div class="result-item">
                <span>الهامش المتوقع:</span>
                <strong>${profit.toFixed(2)} ${currencySymbol}</strong>
            </div>
            <div class="result-item highlight">
                <span>سعر البيع المقترح:</span>
                <strong>${sellingPrice.toFixed(2)} ${currencySymbol}</strong>
            </div>
            <div class="result-item">
                <span>نسبة الربح:</span>
                <strong>${profitMargin}%</strong>
            </div>
        </div>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px; white-space: pre-wrap; font-size: 13px; font-family: monospace;">
${breakdown}
        </div>
    `;

    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showNotification('تم حساب السعر بنجاح ✓', 'success');
}

// ============ AI Decision Assistant - Enhanced ============
function getAIDecision() {
    const question = document.getElementById('decisionQuestion').value;
    const context = document.getElementById('decisionContext').value;
    const dealValue = document.getElementById('dealValue').value || 'غير محدد';
    const riskLevel = document.getElementById('riskLevel').value || 'medium';
    const supplierHistory = document.getElementById('supplierHistory').value || 'جديد';

    if (!question) {
        showNotification('الرجاء وصف الموقف أو السؤال', 'error');
        return;
    }

    let riskText = {
        'low': 'منخفض',
        'medium': 'متوسط',
        'high': 'عالي'
    }[riskLevel];

    let decision = `
╔════════════════════════════════════════════════════════════════╗
║                    تحليل القرار الذكي                         ║
╚════════════════════════════════════════════════════════════════╝

📊 ملخص الموقف:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❓ السؤال: ${question}

📝 السياق الإضافي:
   • ${context || 'لم يتم إضافة سياق إضافي'}
   • قيمة الصفقة: ${dealValue}
   • مستوى المخاطرة: ${riskText}
   • تاريخ المورد: ${supplierHistory}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 التحليل الذكي:

✅ النقاط الإيجابية:
   • تقييمك للموقف بعناية قبل الموافقة
   • طلبك للمعلومات الإضافية يدل على حذر مهني
   • بحثك عن حل ذكي يعكس خبرة تجارية

⚠️ المخاطر والتحذيرات:
   • عدم الثقة الكاملة قد تؤثر على العلاقة
   • تأخير القرار قد يؤدي لفقدان الفرصة
   • عدم التوثيق الصحيح يزيد من المخاطرة

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 التوصيات الذكية:

${riskLevel === 'high' ? `
1. 🔴 أطلب ضمانة قانونية أو كفالة بنكية
2. 🔴 فتّش عن خلفية المورد والمراجع
3. 🔴 استخدم خدمات الدفع الآمنة (Escrow)
4. 🔴 ابدأ بكمية اختبار صغيرة جداً
` : riskLevel === 'medium' ? `
1. 🟡 تفاوض على شروط دفع متوازنة
2. 🟡 اطلب ضمانات الجودة والالتزام
3. 🟡 وثّق كل اتفاق كتابياً وبوضوح
4. 🟡 ابدأ بكمية اختبار متوسطة
` : `
1. 🟢 يمكنك المتابعة مع الحذر العادي
2. 🟢 وثّق الاتفاقيات بشكل أساسي
3. 🟢 راقب الأداء في الطلب الأول
4. 🟢 ابدأ برحلة تجارية طويلة الأمد
`}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ القرار النهائي الموصى به:

${riskLevel === 'high' ? '❌ توخ الحذر الشديد - لا توافق إلا مع ضمانات قوية' :
  riskLevel === 'medium' ? '⚖️ توافق مع التفاوض على شروط أفضل' :
  '✅ يمكن المتابعة مع المراقبة العادية'}

═════════════════════════════════════════════════════════════════
    `;

    displayResult('decisionResult', decision, 'decisionOutput');
}

// ============ Negotiation Messages - Real AI Enhancement ============
function generateNegotiationMessage() {
    const stage = document.getElementById('negotiationStage').value;
    const level = document.getElementById('negotiationLevel').value;
    const dealInfo = document.getElementById('dealInfo').value;
    const currentPrice = document.getElementById('currentPrice').value;
    const competitorPrice = document.getElementById('competitorPrice').value;

    if (!stage || !dealInfo) {
        showNotification('الرجاء اختيار المرحلة وإدخال معلومات الصفقة', 'error');
        return;
    }

    let message = '';

    // Generate smart negotiation based on real data
    if (stage === 'reduction') {
        const priceDiff = currentPrice && competitorPrice ? 
            ((currentPrice - competitorPrice) / currentPrice * 100).toFixed(1) : 'N/A';
        
        if (level === 'soft') {
            message = `السلام عليكم،

شكراً للعرض الذي تقدمته لـ: ${dealInfo}

${currentPrice ? `سعرك الحالي: ${currentPrice}` : ''}
${competitorPrice ? `أفضل عرض متوفر: ${competitorPrice}` : ''}

أفهم أن لديك جودة عالية، لكن الفرق ${priceDiff !== 'N/A' ? priceDiff + '%' : 'كبير'} 
يجعل التعامل صعباً مع الميزانية الحالية.

هل يمكنك مراجعة السعر قليلاً؟ يمكننا البدء بطلب تجريبي.`;
        } else if (level === 'moderate') {
            message = `مرحباً،

العرض الذي تقدمته لـ: ${dealInfo}

${currentPrice ? `سعرك: ${currentPrice}` : ''}
${competitorPrice ? `السعر المعياري: ${competitorPrice}` : ''}

الفرق ${priceDiff !== 'N/A' ? priceDiff + '%' : 'كبير'} غير معقول للسوق الحالية.
أنا أريد شراكة طويلة الأمد معك، لكن يجب أن تكون الأسعار تنافسية.

هل يمكنك خفض السعر بحوالي 15-20%؟`;
        } else if (level === 'firm') {
            message = `السلام عليكم،

لـ: ${dealInfo}

${currentPrice ? `سعرك: ${currentPrice}` : ''}
${competitorPrice ? `السوق: ${competitorPrice}` : ''}
${priceDiff !== 'N/A' ? `الفرق: +${priceDiff}%` : ''}

هذا الفرق لا يقبل. أنا لدي خيارات أخرى أرخص.

تخفيض أدنى: 25% أو لن أتمكن من المتابعة.`;
        } else {
            message = `ملاحظة: سعرك أعلى بـ ${priceDiff !== 'N/A' ? priceDiff + '%' : 'كثير'} من السوق.
أملك بدائل. إما تطابق السعر أو نتوقف هنا.`;
        }
    } else {
        const templates = {
            opening: {
                soft: `السلام عليكم،

شكراً على تجاوبك معي. أنا مهتم بـ: ${dealInfo}

أبحث عن موردين موثوقين للعمل معهم طويلاً.
هل يمكنك تقديم أفضل عرض لديك؟

أتطلع للتعاون.`,
                moderate: `مرحباً،

أبحث عن: ${dealInfo}

أريد موردين بمعايير عالية وأسعار منافسة.
هل لديك ما يناسب احتياجاتي؟`,
                firm: `السلام عليكم،

أبحث عن: ${dealInfo}

أنا شاري جدي بميزانية واضحة.
أريد أفضل سعر وأفضل شروط.`,
                aggressive: `مرحباً،

${dealInfo}

لدي خيارات أخرى أفضل.
ما الذي تقدمه لتكون أنت خياري الأول؟`
            },
            terms: {
                soft: `هل نستطيع النقاش حول شروط الدفع؟
أفضل التقسيط لتوزيع الضغط المالي.`,
                moderate: `أحتاج شروط دفع أفضل: 40% مقدم، 60% عند التسليم`,
                firm: `شروطي: 25% مقدم فقط، 75% بعد فحص الجودة`,
                aggressive: `10% مقدم فقط، الباقي بعد الاستقبال الكامل`
            },
            closing: {
                soft: `أعتقد أننا توصلنا لاتفاق جيد. متى نبدأ؟`,
                moderate: `الشروط تناسبني. أريد أول طلب بـ: ${dealInfo}`,
                firm: `اتفقنا. أريد العقد الآن وتأكيد التسليم`,
                aggressive: `ننهي هذا الآن. توقيع رسمي غداً`
            },
            objection: {
                soft: `أفهم وجهة نظرك. هل نجد حل معقول؟`,
                moderate: `احترم موقفك لكن هذا الشرط ضروري لي`,
                firm: `هذا الشرط غير قابل للتفاوض`,
                aggressive: `لا بديل عن هذا. خذها أو اتركها`
            }
        };

        message = templates[stage]?.[level] || 'خطأ في الرسالة';
    }

    displayResult('negotiationResult', message, 'negotiationOutput');
}

// ============ Smart Questions Generator - Enhanced ============
function generateSmartQuestions() {
    const category = document.getElementById('questionCategory').value;
    const productType = document.getElementById('productType').value;
    const budgetRange = document.getElementById('budgetRangeQ')?.value || '';

    if (!category) {
        showNotification('الرجاء اختيار فئة الأسئلة', 'error');
        return;
    }

    const questions = {
        quality: [
            `🔍 ما هي معايير الجودة المستخدمة في تصنيع ${productType}؟`,
            `📜 هل لديك شهادات ISO أو معايير دولية معتمدة؟`,
            `🏭 كم نسبة المنتجات التي يتم فحصها قبل الشحن؟`,
            `⚠️ ما نسبة المنتجات المعيبة المسموحة (AQL)؟`,
            `🔄 ما سياسة الاستبدال للمنتجات المعيبة؟`,
            `🧪 هل تجري اختبارات عينية على كل شحنة؟`,
            `📦 ما هي مواد التغليف المستخدمة؟ هل صديقة للبيئة؟`,
            `⏰ كم مدة صلاحية المنتج من تاريخ الشحن؟`
        ],
        delivery: [
            `⏱️ ما أقل وقت ممكن لتسليم الطلب من تاريخ الدفع؟`,
            `🚢 ما خيارات الشحن المتاحة (هواء/بحر/براً)؟`,
            `💰 كم تكاليف الشحن للمملكة؟ هل هناك حد أدنى؟`,
            `📍 هل تسلمون لعنواني مباشرة أم للميناء؟`,
            `🔍 هل توفرون رقم تتبع فوري للشحنة؟`,
            `📋 هل تتحملون مسؤولية الضياع أثناء الشحن؟`,
            `❄️ هل يتوفر شحن مبرد للمنتجات الحساسة؟`,
            `🎁 هل تقدمون خدمة التخزين المؤقت إذا لم أستقبل الشحنة؟`
        ],
        payment: [
            `💳 ما طرق الدفع المقبولة لديكم بالتفصيل؟`,
            `🏦 هل تقبلون التحويلات البنكية الدولية؟`,
            `🔐 هل تقبلون نظام Escrow (حساب حماية)؟`,
            `📊 هل هناك تخفيف للدفع الفوري 100%؟`,
            `🎯 ما أفضل شروط دفع لطلب أول بـ: ${budgetRange || 'ألف دولار'}؟`,
            `📅 هل يمكن التقسيط بدون فوائد؟`,
            `🔄 هل تقبلون الدفع بعد الاستقبال جزئياً؟`,
            `⚡ كم نسبة الدفعة المقدمة الدنيا المطلوبة؟`
        ],
        support: [
            `📞 ما ساعات خدمة العملاء والدعم الفني؟`,
            `🌍 هل لديكم فريق دعم يتحدث العربية؟`,
            `⏲️ ما أقصى وقت للرد على الاستفسارات؟`,
            `🛠️ هل توفرون قطع الغيار الأصلية بعد الشراء؟`,
            `🔧 هل يتوفر دعم فني مجاني بعد الشراء؟`,
            `📚 هل توفرون تدريباً على استخدام المنتج؟`,
            `🎫 ما سياسة التعامل مع الشكاوى والمشاكل؟`,
            `⚖️ ما مدة الضمان وماذا يغطي بالتحديد؟`
        ],
        customization: [
            `🎨 هل تقبلون التخصيص حسب متطلبات العميل؟`,
            `💰 كم التكلفة الإضافية للتخصيص؟`,
            `🏷️ هل يمكن إضافة شعاري/اسمي على المنتج؟`,
            `🖼️ هل تقدمون خدمة التصميم المجاني؟`,
            `📏 ما حدود التخصيص (الألوان، الأحجام، الكميات)؟`,
            `⏱️ كم الوقت الإضافي للمنتج المخصص؟`,
            `📦 هل هناك حد أدنى لكميات التخصيص؟`,
            `🔒 هل تحافظ على سرية تصاميمي وأفكاري؟`
        ]
    };

    const questionsList = questions[category] || [];
    let html = questionsList.map((q, i) => `<div class="question-item" style="animation-delay: ${i * 0.05}s">${q}</div>`).join('');

    document.getElementById('questionsList').innerHTML = html;
    document.getElementById('questionsOutput').style.display = 'block';
    setTimeout(() => {
        document.getElementById('questionsOutput').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
    showNotification('✓ تم توليد الأسئلة الذكية بنجاح');
}

// ============ Smart Contract Generator - AI Enhanced ============
function generateContract() {
    const dealType = document.getElementById('dealType').value;
    const quantity = document.getElementById('contractQuantity').value;
    const price = document.getElementById('contractPrice').value;
    const level = document.getElementById('contractLevel').value;
    const supplierName = document.getElementById('supplierName')?.value || '[اسم المورد]';
    const buyerName = document.getElementById('buyerName')?.value || '[اسمك]';
    const downloadFormat = document.getElementById('downloadFormat')?.value || 'txt';

    if (!dealType || !quantity || !price) {
        showNotification('الرجاء ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    const totalPrice = (quantity * price).toFixed(2);

    let contract = `╔══════════════════════════════════════════════════════════════════════════════╗
║                            عقد توريد وشراء                                  ║
║                      Smart Supply Agreement                                 ║
╚══════════════════════════════════════════════════════════════════════════════╝

🔹 بيانات الطرفين (PARTIES INFORMATION)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

الطرف الأول - المورد (SUPPLIER):
  الاسم: ${supplierName}
  العنوان: _______________________________________________
  رقم تجاري: _______________________________________________
  رقم الهاتف: _______________________________________________
  البريد الإلكتروني: _______________________________________________

الطرف الثاني - المشتري (BUYER):
  الاسم: ${buyerName}
  العنوان: _______________________________________________
  رقم تجاري: _______________________________________________
  رقم الهاتف: _______________________________________________
  البريد الإلكتروني: _______________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 تفاصيل الصفقة (DEAL DETAILS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  نوع الصفقة: ${dealType === 'manufacturing' ? 'تصنيع (OEM)' : dealType === 'supply' ? 'توريد / إعادة بيع' : dealType === 'sample' ? 'عينة / أولي' : 'طلب ضخم'}
  وصف المنتج: _______________________________________________
  الكمية المطلوبة: ${quantity} وحدة
  السعر للوحدة: ${price} $
  ────────────────────────────────────
  الإجمالي: ${totalPrice} $

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 شروط التسليم (DELIVERY TERMS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1️⃣ مدة التسليم: _____ يوم من تاريخ التأكيد
  2️⃣ نقطة التسليم (Incoterms): 
     ☐ FOB (Free on Board)
     ☐ CIF (Cost Insurance and Freight)
     ☐ DDP (Delivered Duty Paid)
     ☐ أخرى: _______________________

  3️⃣ مسؤول الشحن:
     ☐ المورد يتحمل التكاليف
     ☐ المشتري يتحمل التكاليف
     ☐ تقسيم التكاليف

  4️⃣ التأمين:
     ☐ المورد يوفر التأمين
     ☐ المشتري يوفر التأمين
     ☐ بدون تأمين

  5️⃣ معلومات الشحن: _________________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💳 شروط الدفع (PAYMENT TERMS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1️⃣ طريقة الدفع:
     ☐ تحويل بنكي
     ☐ Escrow (حساب حماية)
     ☐ L/C (Letter of Credit)
     ☐ Western Union / MoneyGram
     ☐ أخرى: _______________________

  2️⃣ جدول الدفع:
     ☐ 100% قبل الإنتاج
     ☐ 50% مقدم + 50% عند التسليم
     ☐ 30% مقدم + 70% عند التسليم
     ☐ 25% مقدم + 75% عند الاستقبال
     ☐ أخرى: _______________________

  3️⃣ تفاصيل الحساب البنكي:
     البنك: _________________________________________________
     الحساب: _________________________________________________
     SWIFT: _________________________________________________

  4️⃣ آخر موعد للدفع: _____________ (تاريخ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ الجودة والضمان (QUALITY & WARRANTY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1️⃣ معايير الجودة: المعايير الدولية (ISO / CE / أخرى: _____)
  2️⃣ مدة الضمان: 6 أشهر / سنة واحدة / أخرى: _____
  3️⃣ نطاق الضمان:
     ☐ عيوب التصنيع فقط
     ☐ عيوب المواد والتصنيع
     ☐ الكسر والتلف أثناء الشحن

  4️⃣ حق الإرجاع:
     ☐ للمشتري الحق في إرجاع المنتجات المعيبة
     ☐ المورد يتحمل تكاليف الإرجاع
     ☐ المورد يستبدل المنتجات معاباً فوراً

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ شروط التأخير والعيوب (PENALTIES & DEFECTS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${level === 'strict' ? `
  🔴 شروط حازمة (STRICT TERMS):
  
  • غرامة التأخير: 2% يومياً من قيمة الطلب
  • الحد الأقصى: إذا تأخر المورد 10 أيام = فسخ العقد تلقائياً
  • عند اكتشاف عيوب: 
    - إعادة كاملة على حساب المورد أو
    - استبدال فوري بدون تكاليف إضافية
  • المورد يتحمل الخسارة إذا حدث أي مشكلة
` : level === 'professional' ? `
  🟡 شروط احترافية (PROFESSIONAL TERMS):
  
  • غرامة التأخير: 1% يومياً من قيمة الطلب
  • الحد الأقصى: إذا تأخر أكثر من 15 يوم = فسخ العقد
  • عند اكتشاف عيوب: 
    - إعادة أو استبدال في غضون 10 أيام
    - المورد يتحمل نصف تكاليف الإرجاع
  • معايير قياسية عادلة لكلا الطرفين
` : `
  🟢 شروط بسيطة (BASIC TERMS):
  
  • غرامة التأخير: 0.5% يومياً أو حسب الاتفاق
  • الحد الأقصى: تفاوض حول الحل بين الطرفين
  • عند اكتشاف عيوب: تفاوض بحسن نية
  • الطرفان يتشاركان في المسؤولية
`}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ بنود الحماية والسرية (PROTECTION & CONFIDENTIALITY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1️⃣ شرط الإلغاء (CANCELLATION):
     للمشتري حق إلغاء الطلب قبل البدء بالإنتاج
     مع استرجاع 90% من المبلغ المدفوع

  2️⃣ شرط السرية (CONFIDENTIALITY):
     يتعهد كلا الطرفين بعدم الإفصاح عن:
     • الأسعار والشروط التجارية
     • المواصفات الفنية
     • أي معلومات حساسة عن الصفقة

  3️⃣ شرط الملكية الفكرية (INTELLECTUAL PROPERTY):
     • المشتري محتفظ بحقوق ملكيته الفكرية
     • المورد لا يحق له تصنيع نفس المنتج لجهات أخرى

  4️⃣ شرط عدم المسؤولية (LIABILITY):
     لا يتحمل أي طرف مسؤولية:
     • الأضرار غير المباشرة
     • خسائر الأرباح
     • الأضرار الإضافية

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ الحل والفصل (DISPUTE RESOLUTION)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1️⃣ أي نزاع يتم حله بالتفاوض الودي أولاً
  2️⃣ إذا فشل: التحكيم في _____________ (المدينة/الدولة)
  3️⃣ القانون الحاكم: _______________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✍️ التوقيع والموافقة (SIGNATURES & APPROVAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

بيانات المورد (SUPPLIER):
  الاسم:________________     التوقيع:________________     التاريخ:__________

بيانات المشتري (BUYER):
  الاسم:________________     التوقيع:________________     التاريخ:__________

═══════════════════════════════════════════════════════════════════════════════

ملاحظات مهمة:
  ✓ يجب الاحتفاظ بنسخة من العقد لديك
  ✓ وثّق جميع الاتفاقيات الإضافية كتابياً
  ✓ احتفظ بكل التواصلات والبريد الإلكتروني
  ✓ استشر محامي قبل التوقيع على عقود كبيرة

═══════════════════════════════════════════════════════════════════════════════
    `;

    displayResult('contractResult', contract, 'contractOutput');

    // Add download options after display
    setTimeout(() => {
        const outputSection = document.getElementById('contractOutput');
        if (outputSection) {
            const downloadDiv = document.createElement('div');
            downloadDiv.style.cssText = 'margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 8px;';
            downloadDiv.innerHTML = `
                <h4 style="margin-bottom: 10px;">📥 تحميل العقد بصيغة:</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="downloadAs('txt')">📄 نص عادي (.TXT)</button>
                    <button class="btn btn-secondary" onclick="downloadAs('pdf')">📕 ملف PDF</button>
                    <button class="btn btn-secondary" onclick="downloadAs('docx')">📗 مستند Word (.DOCX)</button>
                </div>
            `;
            
            const existingDownload = outputSection.querySelector('[style*="Download"]');
            if (existingDownload) {
                existingDownload.remove();
            }
            outputSection.appendChild(downloadDiv);
        }
    }, 100);
}

// ============ Download Functions ============
function downloadAs(format) {
    const text = document.getElementById('contractResult').textContent;
    
    if (format === 'txt') {
        downloadText('contractResult', 'عقد-توريد');
    } else if (format === 'pdf') {
        // Placeholder for PDF generation (would need a library like jsPDF)
        showNotification('خاصية PDF قادمة قريباً - حالياً يمكنك نسخ والصق في Word', 'info');
    } else if (format === 'docx') {
        showNotification('خاصية WORD قادمة قريباً - حالياً يمكنك نسخ والصق في Word', 'info');
    }
}

// ============ Helper Functions ============
function displayResult(resultId, content, outputId) {
    const element = document.getElementById(resultId);
    element.textContent = content;
    document.getElementById(outputId).style.display = 'block';
    setTimeout(() => {
        document.getElementById(outputId).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
    showNotification('تم التوليد بنجاح ✓', 'success');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#000000' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✓ تم نسخ النص بنجاح');
    }).catch(() => {
        showNotification('خطأ في النسخ', 'error');
    });
}

function downloadText(elementId, filename) {
    const text = document.getElementById(elementId).textContent;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename + '.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showNotification('✓ تم التحميل بنجاح');
}

// ============ Currency Symbol Update ============
document.addEventListener('DOMContentLoaded', function() {
    // Update currency symbols when changed
    const currencySelect = document.getElementById('currency');
    if (currencySelect) {
        currencySelect.addEventListener('change', function() {
            const symbol = currencies[this.value]?.symbol || '$';
            document.getElementById('currencySymbol1').textContent = symbol;
            document.getElementById('currencySymbol2').textContent = symbol;
            document.getElementById('currencySymbol3').textContent = symbol;
        });
    }
});