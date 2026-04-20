export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string;
  // JSX content rendered by the post page
  contentKey: "baglamukhi-havan-benefits" | "lal-mirch-havan-importance" | "havan-removes-negative-energy";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "baglamukhi-havan-benefits",
    title: "Baglamukhi Havan Benefits — बगलामुखी हवन के 10 चमत्कारी लाभ",
    description: "बगलामुखी हवन के 10 बड़े लाभ — शत्रु नाश, court case विजय, tantra nivaran और जीवन की बाधाओं का समाधान। पूरा spiritual guide।",
    date: "2026-04-15",
    readTime: "6 मिनट",
    keywords: "baglamukhi havan benefits, baglamukhi havan, baglamukhi puja, vijay prapti havan",
    contentKey: "baglamukhi-havan-benefits",
  },
  {
    slug: "lal-mirch-havan-importance",
    title: "Lal Mirch Havan Importance — लाल मिर्च हवन का महत्व एवं विधि",
    description: "Lal Mirch Havan क्यों किया जाता है? जानें इस tantra nivaran havan का पूर्ण महत्व, विधि और किसे करवाना चाहिए।",
    date: "2026-04-10",
    readTime: "5 मिनट",
    keywords: "lal mirch havan, tantra nivaran havan, nazar dosh havan, baglamukhi havan",
    contentKey: "lal-mirch-havan-importance",
  },
  {
    slug: "havan-removes-negative-energy",
    title: "How Havan Removes Negative Energy — हवन से नकारात्मक ऊर्जा का नाश कैसे होता है",
    description: "हवन की अग्नि एवं वैदिक मंत्रों से वातावरण की नकारात्मक ऊर्जा कैसे समाप्त होती है — वैज्ञानिक एवं आध्यात्मिक दृष्टिकोण।",
    date: "2026-04-05",
    readTime: "7 मिनट",
    keywords: "havan negative energy, baglamukhi havan, tantra nivaran havan, nazar dosh havan",
    contentKey: "havan-removes-negative-energy",
  },
];
