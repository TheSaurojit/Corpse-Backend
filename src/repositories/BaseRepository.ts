import { db } from "../config/firebase";

export class BaseRepository<T extends { id?: string }> {
  private collectionRef;

  constructor(collectionName: string) {
    this.collectionRef = db.collection(collectionName);
}

  async create(data: Omit<T, "id">): Promise<T> {
    const docRef = await this.collectionRef.add(data);
    return { id: docRef.id, ...data } as T;
  }

  async findAll(): Promise<T[]> {
    const snapshot = await this.collectionRef.get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as T),
    }));
  }

  async findById(id: string): Promise<T | null> {
    const doc = await this.collectionRef.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...(doc.data() as T) };
  }

  async update(id: string, data: Partial<T>): Promise<boolean> {
    await this.collectionRef.doc(id).update(data);
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.collectionRef.doc(id).delete();
    return true;
  }
}
