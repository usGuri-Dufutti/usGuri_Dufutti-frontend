import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});

export default api;

// ---- Areas API ----
export interface AreaCoordinate {
  latitude: number;
  longitude: number;
  order: number;
  id: number;
}

export interface AreaSummary {
  id: number;
  coordinates: AreaCoordinate[];
  description: string | null;
}

export interface AreaSite {
  latitude: number;
  longitude: number;
  elevation: number;
  id: number;
}

export interface AreaObservation {
  phenophase_id: number;
  observation_date: string; // YYYY-MM-DD
  is_blooming: boolean;
  id: number;
  site_id: number;
  plant_id: number;
}

export interface AreaPlant {
  species: string; // scientific or species epithet from backend
  id: number;
  site_id: number;
  area_id: number;
  site: AreaSite;
  observations: AreaObservation[];
}

export interface AreaDetail {
  id: number;
  coordinates: AreaCoordinate[];
  plants: AreaPlant[];
}

export async function getAreas(): Promise<AreaSummary[]> {
  const { data } = await api.get<AreaSummary[]>("/areas");
  return data;
}

export async function getAreaById(id: number): Promise<AreaDetail> {
  const { data } = await api.get<AreaDetail>(`/areas/${id}`);
  return data;
}

// ---- Chat API ----
export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  question: string;
  answer: string;
  area_id: number;
}

export async function sendChatMessage(areaId: number, question: string): Promise<ChatResponse> {
  const { data } = await api.post<ChatResponse>(`/areas/${areaId}/chat`, { question });
  return data;
}