# TManagement loyihasiga hissa qo'shish

TManagement loyihasigaga o'z hissangizni qo'shishingizni va uni bugungi kundagidan ham yaxshiroq qilishga yordam berishingizni istardik!
Contributorlik uchun quyidagilarga amal qilishni so'raymiz:

- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Commit Message Format](#commit)

## <a name="question"></a> Savol yoki muammo bormi?

Savolingizni berishning bir necha yo'li mavjud:

- Savolingizni pochta orqali tillaberdiyevibrat@gmail.com manziliga yuboring

## <a name="issue"></a> Xavfsizlikda zaiflik topdingizmi?

Agar siz xavfsizlik zaifligini yoki shaxsan muhokama qilinishi kerak bo'lgan narsani topsangiz. Iltimos, biz bilan bog'laning tillaberdiyevibrat@gmail.com

## <a name="issue"></a> Xato topdingizmi?

Agar manba kodida xato topsangiz, bizga yordam berishingiz mumkin buning uchun bizning [GitHub Repository](https://github.com/Ibratbek/TManagement)ga [issue yuboring](#submit-issue) yoki [Pull Request](#submit-pr) muammoni bartaraf etib yuborishingiz ham mumkin.

## <a name="feature"></a> Imkoniyat yetishmayapti

Siz yangi imkoniyatni so'rashingiz yoki taklif berishingiz mumkin buning uchun Repositoryga [issue yuboring](#submit-issue). Agar siz yangi funksionalni tadbiq (_implement_) qilmoqchi bo'lsangiz, [muammoni yuboring](#submit-issue) birinchi navbatda sizning taklifingizni ko'rib chiqib biz undan foydalanishimiz mumkinligiga ishonch hosil qilishimiz kerak.

Iltimos, bu qanday o'zgarish ekanligini ko'rib chiqing:

- **Asosiy xususiyat** uchun, avvalo, masalani oching [masalani oching](#submit-issue) va taklifingizni belgilang siz bergan taklif muhokama qilinadi. Bu bizga sa'y-harakatlarimizni yaxshiroq muvofiqlashtirishga, ishlarni takrorlashning oldini olishga va loyihaga muvaffaqiyatli qabul qilinishi uchun o'zgartirishni amalga oshirishga yordam beradi.

- **Kichik xususiyatlar** to'g'ridan-to'g'ri ishlab chiqilishi mumkin. Buning uchun [Pull Request yuboring](#submit-pr).

## <a name="submit"></a> Taqdim etish boʻyicha koʻrsatmalar (_Submission Guidelines_)

### <a name="submit-issue"></a> Muammoni yuborish (_Submitting an Issue_)

Muammoni yuborishda oldin mavjud bo'lgan muammolar ro'yxatidan tekshirib qarab ko'ring. Siz yubormoqchi bo'lgan muamo ro'yxatda bo'lishi mumkin.

Biz barcha muammolarni imkon qadar tezroq bartaraf etishni xoxlaymiz, lekin xatoni tuzatishdan oldin uni qayta ishlab chiqarishimiz va tasdiqlashimiz kerak.
Xatoliklarni tuzatish uchun sizdan muammoni batafsilroq tushuntirishni so'raymiz.

[Ushbu formani](https://github.com/Ibratbek/TManagement/issues/new) to'ldirib siz muammo yoki xatolikni yozishingiz mumkin.

### <a name="submit-pr"></a> Pull Request yuborish _Submitting a Pull Request_ (PR)

Pull Request (PR) yuborishdan oldin quyidagi yo'riqnomaga amal qiling:

- [Pull requests](https://github.com/Ibratbek/TManagement/pulls) bo'limidan tekshirib ko'ring. Siz yubormoqchi bo'lgan PR mavjud bo'lish mumkin.

- Barcha o'zgarishlaringizni yangi git branchda qiling

  ```shell
  git checkout -b my-fix-branch main
  ```

- Sizning pull requestingizga tegishli **test holatlarni** o'z ichiga olishi kerak testlarsiz siz yuborgan PR qabul qilinmaydi.

- Qilgan o'zgarishlaringizni aniq tavsiflovchi xabarlardan foydalaning bizning [xabar konventsiyalarini bajarish](#commit) qoidalarimizga ergashing.
  Ushbu konventsiyalarga rioya qilish zarur, chunki relizlar ushbu xabarlardan avtomatik ravishda yaratiladi.

       ```shell
       git commit -a
       ```

Eslatma: ixtiyoriy commit -a buyruq qatori opsiyasi tahrirlangan fayllarni avtomatik ravishda qo'shadi _add_ va o'chiradi _rm_ qiladi.

- Push your branch to GitHub:

  ```shell
  git push origin my-branch
  ```

- Githubda `TManagement.uz:main` ga pull request PR yuboring.
- Agar biz o'zgarishlarni taklif qilsak

  - Kerakli yangilanishlarni amalga oshiring
  - Qaytadan testlarni ishlatib ko'ring barchasi muvaffaqiyatli o'tishi kerak.
  - Filialingizni qayta asoslang _rebase_ va GitHub omboringizga o'tishga majbur qiling _force push_ (bu sizning Pull Requestingizni yangilaydi):

    ```shell
    git rebase main -i
    git push -f
    ```

Bo'ldi shu! Hissangiz uchun rahmat!

## Pull Request asosiy branchga qo'shilgandan so'ng

Siz yuborgan PR `main` branchga qo'shilganidan keyin PR uchun yaratilgan branchni Githubdan o'chirib yuborishingiz kerak.

- Github dan remote branchni o'chirib yuborish uchun quyidagilarga amal qiling:

  ```shell
  git push origin --delete my-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-branch
  ```

- Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## <a name="commit"></a> Xabarni yuborish bo'yicha ko'rsatmalar **Commit Message Guidelines**

Bizning git commit xabarlarimizni formatlash bo'yicha juda aniq qoidalarimiz bor. Ushbu qoidalar loyiha tarixini tushunish va oqishga onson bo'lishi uchun zarur. Lekin biz uchun commit xabarlar o'zgarishlar jurnalini _changelog_ avtomatik generatsiya qilish uchun ham muhim.

### Commit xabarlarining formati **Commit Message Format**

Barcha commit xabarlar **header**, **body**, **footer**. Sarlavha **header** o'z ichiga olgan maxsus formatga ega ushbu formatlar quidagilar: **type** va **subject**.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Xabarning har qanday satri 100 belgidan oshmasligi kerak! Bu xabarni osonroq qilish imkonini beradi
GitHub-da, shuningdek, turli xil git vositalarida o'qish uchun.

### Orqaga qaytarish _Revert_

Agar siz qilgan eng oxirgi commit xabarni ortga qaytarmoqchi bo'lsangiz `revert` qilishiniz kerak bo'ladi. Ortga qaytarilgan commit

### Type

### Subject

### Body

### Footer

### Examples
