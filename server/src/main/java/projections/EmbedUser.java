package projections;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedUser", types = Article.class)
public interface EmbedUser {
    String getName();
    String getType();
    Long getID();
    User getUser();
}

