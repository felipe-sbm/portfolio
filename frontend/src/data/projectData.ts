/* Este aquivo é temporário, somente para testar o card enquanto o backend não está finalizado. */

export interface ProjectData {
    ProjectName: string;
    ProjectImage: string;
    ProjectImageAlt?: string;
    ProjectDescription: string;
    ProjectLink: string;
}

export const projects: ProjectData[] = [
    {
        ProjectName: "Projeto Exemplo",
        ProjectImage: "/assets/images/pexels-luis-gomes-166706-546819.jpg",
        ProjectImageAlt: "Imagem do Projeto",
        ProjectDescription: "Descrição do Projeto Exemplo.",
        ProjectLink: "https://www.github.com/felipe-sbm"
    }
];

/* CÓDIGO TEMPORÁRIO */