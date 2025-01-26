export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bab: {
        Row: {
          id: number;
          judul: string;
          kelas: Database["public"]["Enums"]["kelas"];
          mata_pelajaran_id: number;
          path_text: string;
        };
        Insert: {
          id?: number;
          judul: string;
          kelas: Database["public"]["Enums"]["kelas"];
          mata_pelajaran_id: number;
          path_text?: string;
        };
        Update: {
          id?: number;
          judul?: string;
          kelas?: Database["public"]["Enums"]["kelas"];
          mata_pelajaran_id?: number;
          path_text?: string;
        };
        Relationships: [
          {
            foreignKeyName: "bab_mata_pelajaran_id_fkey";
            columns: ["mata_pelajaran_id"];
            isOneToOne: false;
            referencedRelation: "mata_pelajaran";
            referencedColumns: ["id"];
          },
        ];
      };
      mata_pelajaran: {
        Row: {
          deskripsi: string;
          icon: string | null;
          id: number;
          nama: string;
          path_text: string | null;
          tailwind_color: string;
        };
        Insert: {
          deskripsi: string;
          icon?: string | null;
          id?: number;
          nama: string;
          path_text?: string | null;
          tailwind_color?: string;
        };
        Update: {
          deskripsi?: string;
          icon?: string | null;
          id?: number;
          nama?: string;
          path_text?: string | null;
          tailwind_color?: string;
        };
        Relationships: [];
      };
      sub_bab: {
        Row: {
          bab_id: number;
          id: number;
          judul: string;
          path_text: string | null;
        };
        Insert: {
          bab_id: number;
          id?: number;
          judul: string;
          path_text?: string | null;
        };
        Update: {
          bab_id?: number;
          id?: number;
          judul?: string;
          path_text?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "sub_bab_bab_id_fkey";
            columns: ["bab_id"];
            isOneToOne: false;
            referencedRelation: "bab";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never
    };
    Functions: {
      [_ in never]: never
    };
    Enums: {
      kelas: "10" | "11" | "12";
    };
    CompositeTypes: {
      [_ in never]: never
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
