export interface Participant {
  api_url: string;
  call_direction: string;
  display_name: string;
  encryption: string;
  external_node_uuid: string;
  fecc_supported: string;
  has_media: boolean;
  is_audio_only_call: string;
  is_external: boolean;
  is_muted: string;
  is_presenting: string;
  is_streaming_conference: boolean;
  is_video_call: string;
  local_alias: string;
  overlay_text: string;
  presentation_supported: string;
  protocol: string;
  role: string;
  rx_presentation_policy: string;
  service_type: string;
  spotlight: number;
  start_time: number;
  uri: string;
  uuid: string;
  vendor: string;
}
